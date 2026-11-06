#!/usr/bin/env node
/**
 * 零依赖 README 外链存活检查。
 *
 *   node scripts/check-links.mjs [文件...]      # 默认 README.md
 *
 * 判定口径(降级不撒谎,也不误杀):
 *   2xx / 3xx              → OK
 *   401/403/405/429/503    → WARN,反爬或限流,不判死(如爱发电的 Cloudflare)
 *   404 / 410              → DEAD,退出码 1
 *   超时 / DNS / 网络异常  → WARN,可能是对方站点的反爬,不算 CI 失败
 */

import { readFileSync } from 'node:fs';

const files = process.argv.slice(2).length ? process.argv.slice(2) : ['README.md'];
const urls = new Set();
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  // 抓取 markdown/HTML 里出现的所有 http(s) 链接(含图片与裸链接)
  for (const match of text.matchAll(/https?:\/\/[^\s)"'`>\\]+/g)) {
    urls.add(match[0].replace(/[.,;:!?、。]+$/, ''));
  }
}

const WARN_CODES = new Set([401, 403, 405, 429, 503]);

async function probe(url) {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(15_000),
      redirect: 'follow',
      headers: { 'user-agent': 'wjh941-link-checker/1.0 (+https://github.com/wjh941)' },
    });
    if (res.ok) return { url, verdict: 'OK', code: res.status };
    if (WARN_CODES.has(res.status)) return { url, verdict: 'WARN', code: res.status };
    return { url, verdict: 'DEAD', code: res.status };
  } catch (err) {
    return { url, verdict: 'WARN', code: err?.cause?.code || err?.name || 'ERR' };
  }
}

const results = await Promise.all([...urls].map(probe));
results.sort((a, b) => a.url.localeCompare(b.url));

let dead = 0;
for (const { url, verdict, code } of results) {
  const icon = verdict === 'OK' ? '✅' : verdict === 'WARN' ? '⚠️ ' : '❌';
  console.log(`${icon} [${verdict}] ${String(code).padEnd(4)} ${url}`);
  if (verdict === 'DEAD') dead += 1;
}

console.log(`\n${results.length} 条链接:${results.length - dead - results.filter((r) => r.verdict === 'WARN').length} ok · ${results.filter((r) => r.verdict === 'WARN').length} warn · ${dead} dead`);

if (dead > 0) {
  console.error(`\n✖ 发现 ${dead} 条失效链接(404/410)——作品集里有门面塌了`);
  process.exit(1);
}
