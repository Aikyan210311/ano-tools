# 任务计划：爱音的工具箱

## 目标
把 `D:\Aikyan\AikaynTools` 持续维护成一个给自己和朋友使用的小工具网页项目，先稳定前端底座，再逐步添加具体工具。

## 当前阶段
阶段 4：首页视觉与交互完善

## 各阶段

### 阶段 1：前端底座搭建
- [x] 确认项目目录和现有图片资源
- [x] 初始化 Vite + React + TypeScript 项目结构
- [x] 实现主页面背景图、遮罩、左上角站点名
- [x] 预留工具入口网格和工具配置结构
- [x] 添加 VSCode 推荐插件和基础设置
- **状态：** complete

### 阶段 2：项目管理与记忆文件建立
- [x] 创建 `task_plan.md` 保存长期目标和阶段计划
- [x] 创建 `findings.md` 保存发现、决策和问题
- [x] 创建 `progress.md` 保存会话进度和测试记录
- **状态：** complete

### 阶段 3：本地开发环境修复
- [x] 安装或修复 Node.js LTS 与 npm
- [x] 在项目根目录执行 `npm install`
- [x] 执行 `npm run build` 验证生产构建
- [x] 执行 `npm run dev` 启动本地开发服务
- **状态：** complete

### 阶段 4：首页视觉与交互完善
- [x] 在本地开发服务检查首页可访问
- [x] 根据反馈调整首页标题、主文案和占位卡片
- [x] 删除首页说明段落和右下角三个占位卡片
- [x] 参考 `cho-kaguyahime.com` 首页重做主视觉：暗色霓虹舞台、中央圆形图片轮播、装饰环和按钮元素
- [x] 中央大圆圈自动轮播 `images` 文件夹中的图片资源
- **状态：** in_progress

### 阶段 5：第一批工具规划
- [ ] 收集最常用的 3-5 个工具需求
- [ ] 为每个工具确认输入、输出、边界情况和是否需要本地存储
- [ ] 优先实现纯前端、无账号、无后端的小工具
- **状态：** pending

### 阶段 6：工具架构扩展
- [ ] 工具数量增加后引入页面路由
- [ ] 抽出通用工具卡片、页面容器和表单组件
- [ ] 评估是否需要 PWA、后端、数据库或部署平台
- **状态：** pending

### 阶段 7：GitHub Pages 部署发布
- [x] 添加 GitHub Pages Actions 部署工作流
- [x] 调整 Vite 静态资源路径以适配 GitHub Pages 子路径
- [x] 初始化本地 Git 仓库并完成首次提交
- [x] 创建或连接 GitHub 远程仓库
- [x] 推送 `main` 分支并触发 Pages 部署
- [x] 在 GitHub 仓库 Pages 设置中选择 `GitHub Actions`
- **状态：** complete

## 已做决策
| 决策 | 理由 |
|------|------|
| 先做网页，不做微信小程序 | 当前目标是自己和朋友使用的小工具集合，网页开发、分享、更新都更快 |
| 使用 Vite + React + TypeScript | 适合轻量工具站，开发体验好，后续扩展组件和页面方便 |
| 当前阶段不接后端 | 先验证工具体验，减少复杂度 |
| 首页先不引入路由 | 工具数量还少，用配置数组预留入口即可 |
| 使用根目录 `images` 文件夹中的 JPG 作为背景 | 用户已准备图片，符合当前视觉要求 |
| 英文品牌名统一使用 `Ano`，站点英文标识使用 `AnoTools` | 用户指定“爱音”的英文以后统一使用 Ano |
| 使用 GitHub Pages + GitHub Actions 发布 | 项目是纯前端静态站，构建输出 `dist/` 可直接托管 |
| 后续修改默认只做本地修改和本地测试，不主动发布 | 用户要求只有明确提出发布时才更新 Git/GitHub Pages |

## 遇到的问题
| 问题 | 尝试次数 | 当前处理 |
|------|---------|---------|
| 当前环境 `npm` 不可用，`node` 指向 Codex 应用内置路径且执行被拒绝 | 2 | 已记录，下一阶段需要在本机安装或修复 Node.js LTS |
| `planning-with-files-zh` 技能文件和模板在终端显示乱码 | 1 | 按可识别流程手动创建中文规划文件 |
| PowerShell 直接运行 `npm` 会命中 `npm.ps1` 并被执行策略拦截 | 1 | 使用 `npm.cmd` 可正常执行；也可以调整 PowerShell 执行策略 |
| GitHub Pages workflow 首次运行在 `Setup Pages` 失败 | 1 | 需要在仓库 Settings -> Pages 中把 Source 设置为 `GitHub Actions` 后重跑 |

## 下一步默认任务
1. 在本地浏览器继续检查首页视觉效果和手机端适配。
2. 根据本地预览继续微调首页细节。
3. 选择第一个要实现的小工具。

## 维护规则
- 每次开始新任务前先读取 `task_plan.md`、`findings.md`、`progress.md`。
- 每完成一个阶段，更新本文件的阶段状态。
- 每次遇到环境、依赖、构建或设计问题，记录到 `findings.md` 和 `progress.md`。
- 新增工具前先在本文件补充任务，再执行实现。
- 后续功能或视觉修改默认只在本地完成并验证；不要主动 commit、push 或触发 GitHub Pages 发布。
- 只有用户明确说“发布”“更新到 GitHub”“推送线上”等意思时，才提交并推送到远程仓库。

## 最新发布
- 2026-04-27 已发布轮播首页版本。
- 提交：`7cfa2f3 Publish carousel homepage`
- 线上地址：`https://aikyan210311.github.io/ano-tools/`
- 验证：线上首页返回 HTTP 200，资源 hash 与本地构建产物一致。

## 当前未发布改动
- 首页已按用户提供的五张参考图完成本地视觉改版。
- 改动内容：发光斜体标题、深蓝纹理背景、霓虹漂浮物、右上角横向展开菜单动画。
- 验证：`npm.cmd run lint`、`npm.cmd run build`、本地 `http://127.0.0.1:5175` 均通过。
- 状态：未提交、未推送、未发布线上。
- 后续调整：左上角标题已替换为 `images/generated/title-cutout.png`；漂浮物已替换为 `images/generated/float-*.png`；轮播圆点最多 6 个并移动到圆盘下方；菜单、scroll、official 位置已按截图反馈微调。
- 最新本地验证：`npm.cmd run lint`、`npm.cmd run build`、本地 `http://127.0.0.1:5176` 均通过。
- 最新细调：标题继续左上移；圆盘放大；取消轮播圆点和图片数量限制；点击圆盘切下一张；漂浮物恢复 CSS 版本；删除灯笼；SCROLL 居中；新增月亮 loading、闪白转场和元素入场动画。
- 最新本地验证：`npm.cmd run lint`、`npm.cmd run build`、本地 `http://127.0.0.1:5177` 均通过。
- 再次细调：标题进一步左上移并删除小字；圆盘继续放大；轮播图改为 `contain` 尽量完整显示；loading 月球增强 3D 感；闪白和元素入场动画放慢、行程加长。
- 最新本地验证：`npm.cmd run lint`、`npm.cmd run build`、本地 `http://127.0.0.1:5178` 均通过。
- 最新本地细调：loading 改为旋转唱片，唱片中心使用 `images/iloha.png`；标题继续左上移动；圆盘轮播恢复 `cover` 显示并收紧外圈比例，增大内圈图片显示区域。
- 最新本地验证：`npm.cmd run lint`、`npm.cmd run build`、本地 `http://127.0.0.1:5178` 均通过。
