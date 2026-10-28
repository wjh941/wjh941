<div align="center">

# 👋 你好，我是 wjh941

**数据科学在读 · 把想法做成能跑、能测、能卖的真实产品**

我不只写 Demo——每个项目都带自动化测试、CI 流水线和真实部署，其中两条产品线在真实售卖。

[14 个公开仓库](https://github.com/wjh941?tab=repositories) · [1500+ 自动化测试](https://github.com/wjh941/ai-resume) · [15+ 条 CI 工作流](https://github.com/wjh941/yunfan-admin/actions) · [2 条在营付费产品线](https://github.com/wjh941/whoyouare)

</div>

---

## 🤖 AI 应用 · 让模型干有边界的活

| ![店铺运营 Copilot](https://raw.githubusercontent.com/wjh941/merchant-copilot/main/docs/images/dashboard.png) |
| :---: |
| **[merchant-copilot](https://github.com/wjh941/merchant-copilot)** —— 带人工审批门的电商运营 Agent。能查数、能分析、能提案，但**任何写操作必须店主点批准才生效**；带 23 任务确定性评测集与双模型横评，零 npm 依赖。对标 Anthropic commerce-agents 的安全模式，但跑在真实可运行的后端上。 |

| **[ai-resume](https://github.com/wjh941/ai-resume)** —— AI 岗位查询与智能简历工作台：三端一体（FastAPI + Vue3 + 微信小程序）。约 700 个自动化测试、92% 覆盖率进 CI 门禁；AI 只润色措辞，篡改经历会被正则守卫 422 拦截。 | **[fanqing-plan](https://github.com/wjh941/fanqing-plan)** —— 断更账号重启工具：AI 生成重启诊断/选题/双平台文案/排期。服务端注入系统提示词 + CORS 白名单的防滥用代理，Playwright E2E，Vercel + Pages 双线部署。 |
| :--- | :--- |

**[jd-match-radar](https://github.com/wjh941/jd-match-radar)** —— 岗位↔简历双通道可解释匹配检索：混合检索:BM25 + 字符 bigram 向量 + RRF 融合，每个分数可拆到简历原文证据与技能缺口；**12 组真值标注的确定性评测（Recall@3 = 1.000 / MRR = 0.865）在 CI 三版本 Node 复跑**，零 npm 依赖。

## 📊 数据与机器学习 · 从原始数据到在线服务

| ![HomeValue 估值工作台](https://raw.githubusercontent.com/wjh941/homevalue/main/docs/images/dashboard.png) |
| :---: |
| **[homevalue](https://github.com/wjh941/homevalue)** —— 北京二手房估值平台，端到端一个人做完：**186 万行**链家快照 → SQLite 三层数仓（12 个窗口函数查询）→ LightGBM + CQR 区间校准（**287,105 套房源，MAE 5,769 元/㎡，R² 0.924**）→ FastAPI 在线估值 + 逐因子归因 → 单房归因批量化 → A/B 实验设计（含 SRM 卡方检验）→ 月度自动重训管道（质量门禁阻断劣化模型）→ 漂移监控看板（预测分布 vs 训练分布卡方检验）。时间外推的乐观偏差 +38.8% 也如实写进了文档。 |

## 🖥️ 前端全栈 · 产品级完成度

| ![同频](https://raw.githubusercontent.com/wjh941/campus-soul/main/docs/images/discovery.png) | ![云帆 Admin](https://raw.githubusercontent.com/wjh941/yunfan-admin/main/docs/images/dashboard.png) |
| :---: | :---: |
| **[campus-soul](https://github.com/wjh941/campus-soul)** —— 校园社交 H5：Supabase RLS 全覆盖 + 18+ 合规门禁 + PWA，36 个 SQL 迁移。 | **[yunfan-admin](https://github.com/wjh941/yunfan-admin)** —— 中后台管理系统：RBAC 三级权限 + ⌘K 命令面板 + React Query，Lighthouse 89/94/96。 |

另有 **[whoyouare](https://github.com/wjh941/whoyouare)**（付费测评 H5：服务端一码一设备 + 微信内置浏览器四层防御）与私人博客 **[miniflow v2.0](https://github.com/wjh941/miniflow)**（Apple 风格 PWA · 可选 AES-GCM 加密锁 · 离线可用）。

## 🛠️ 本地工具 · 解决真实问题

| 仓库 | 一句话 | 质量信号 |
| --- | --- | --- |
| [video-duplicate-check](https://github.com/wjh941/video-duplicate-check) | MP4 相似度查重：pHash+dHash + LSH，五种报告 + 可恢复安全清理 | 142 测试 · 2 OS × 3 Python CI |
| [video_labeler](https://github.com/wjh941/video_labeler) | PySide6 视频片段标注：审核流 / FFmpeg 批量导出 / YOLO 交换 | 266 测试 · Win+Ubuntu CI |
| [video-event-labeler](https://github.com/wjh941/video-event-labeler) | 零依赖 Web 行为事件标注：毫秒级截取 + 乐观锁并发保护 | 136 测试 · 双平台 CI |
| [repo-pulse](https://github.com/wjh941/repo-pulse) | 仓库脉搏：一行命令体检全部公开仓库，可解释健康评分 | 8 测试 · Node 18/20/22 矩阵 |
| [chen-sheng-assistant](https://github.com/wjh941/chen-sheng-assistant) | 零依赖本地经营助手：订单状态机 / 库存预警 / 登录限速 | 32 集成测试 · Node 18/20/22 矩阵 |

## 💰 在营业务（私有仓库）

另有多条**真实售卖中的虚拟产品线**（付费测评 H5 + 兑换码验证 API + 发码台、本地商用交付流水线）——含管理密钥与真实客户数据，保持私有，不做作品集展示。

## ⚡ 支持我的创作

我在爱发电开设了创作者主页 **[喵系测试局](https://afdian.com/a/mythosmeow)**，持续更新**互动人格测试**内容——西方神话主题（奥林匹斯神格、北欧符文、传世名画）以及全新上线的「内在圣殿 · 七宗罪×七美德」系列。部分深度测评通过爱发电按份解锁，欢迎来逛逛：

<div align="center">

**🔗 [afdian.com/a/mythosmeow](https://afdian.com/a/mythosmeow) —— 喵系测试局 · 互动人格测试**

</div>

---

<div align="center">

**技术栈**：Python (FastAPI / LightGBM / pandas) · TypeScript (React / Vue) · Node.js · SQL · GitHub Actions · Docker

*每个仓库的 README 都有真实截图与可验证的数字——点进去看看。*

</div>
