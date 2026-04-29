# 发现与决策：爱音的工具箱

## 项目现状
- 项目目录：`D:\Aikyan\AikaynTools`
- 当前项目不是 Git 仓库。
- 现有图片资源：`images/6a249ef4-af75-4b75-ba0c-622dd212cd11.jpg`
- 图片尺寸：1715 x 1382，JPG，已作为首页背景引用。

## 技术决策
| 决策 | 理由 |
|------|------|
| 使用 Vite + React + TypeScript | 适合快速开发个人工具站，类型约束有利于后续维护 |
| 首页暂不使用 `react-router` | 当前只有一个主页面，避免过早增加复杂度 |
| 工具入口使用配置数组 | 后续新增工具时，只需要增加工具元数据和组件入口 |
| 先做纯前端 | 当前需求不需要登录、数据库或服务端计算 |
| VSCode 推荐 ESLint 和 Prettier | 保持代码风格稳定，方便长期维护 |
| 英文品牌名统一使用 `Ano` / `AnoTools` | 用户指定以后所有“爱音”的英文使用 Ano |
| 使用 GitHub Pages + Actions 发布 | GitHub Pages 支持通过自定义 GitHub Actions workflow 发布构建产物 |
| 后续采用本地优先发布流程 | 用户要求修改先在本地测试，明确要求发布后再更新 GitHub Pages |

## 已创建的核心文件
- `package.json`：依赖、脚本和项目元信息。
- `index.html`：网页入口。
- `vite.config.ts`：Vite React 配置。
- `tsconfig*.json`：TypeScript 配置。
- `eslint.config.js`：ESLint 配置。
- `.vscode/extensions.json`：VSCode 推荐插件。
- `.vscode/settings.json`：VSCode 格式化和 ESLint 保存设置。
- `src/main.tsx`：React 挂载入口。
- `src/App.tsx`：首页结构和工具入口配置。
- `src/styles.css`：背景图、遮罩、首页布局和响应式样式。
- `README.md`：开发和构建说明。

## 环境发现
- PowerShell 中 `npm` 不可用。
- `node` 命令解析到 `C:\Program Files\WindowsApps\OpenAI.Codex_26.422.3464.0_x64__2p2nqsd0c76g0\app\resources\node.exe`。
- 执行 `node --version` 报错：`Access is denied`。
- `C:\Program Files\nodejs\node.exe` 和 `C:\Program Files\nodejs\npm.cmd` 不存在。
- 因此当前环境未能执行 `npm install`、`npm run build` 或启动开发服务。
- 2026-04-27 更新：Node.js 已安装到 `C:\Program Files\nodejs`。
- 当前可用版本：Node `v24.15.0`，npm `11.12.1`。
- 当前 Codex/PowerShell 会话的 PATH 仍优先看到 Codex 内置 `node.exe`，临时把 `C:\Program Files\nodejs` 加到 PATH 最前即可使用。
- PowerShell 直接执行 `npm` 会被 `npm.ps1` 执行策略拦截；使用 `npm.cmd` 可以绕过。
- `npm install`、`npm run lint`、`npm run build` 已通过。
- `npm run dev -- --host 127.0.0.1` 已启动，`http://127.0.0.1:5173` 返回 HTTP 200。
- `npm install` 后提示 2 个 moderate 漏洞，暂未执行 `npm audit fix --force`，避免破坏性升级。
- Git 已安装，版本 `2.49.0.windows.1`。
- GitHub CLI `gh` 未安装。
- 当前没有 GitHub token 环境变量，也没有远程仓库地址。

## 部署发现
- 已添加 `.github/workflows/deploy.yml`。
- 工作流在 push 到 `main` 时运行：checkout -> setup Node 24 -> `npm ci` -> `npm run build` -> upload `dist` -> deploy Pages。
- `vite.config.ts` 已设置 `base: './'`，避免 GitHub Pages 项目站点位于 `/仓库名/` 时资源路径失效。
- 本地 Git 仓库已初始化，首次提交为 `ae44a93 Initial AnoTools site`。
- 远程仓库已设置为 `https://github.com/Aikyan210311/ano-tools.git`，`main` 分支已推送。
- 首次 GitHub Actions 运行地址：`https://github.com/Aikyan210311/ano-tools/actions/runs/24979567422`。
- 首次运行结果：`Build` 成功，`Setup Pages` 失败，`Deploy` 被跳过。
- 发布还需要在仓库 Pages 设置中选择 `GitHub Actions`，然后重跑失败的 workflow。
- 用户已确认 GitHub Pages 发布成功。

## 视觉发现
- 背景图是横向偏宽的动漫房间图。
- 首页使用全屏 `cover` 背景，桌面端会居中裁切。
- 为保证文字可读性，样式中添加了深色半透明渐变遮罩和轻微模糊。
- 首页小英文标识已从 `Aiyin Tools` 改为 `AnoTools`。
- 首页左上角“爱音的工具箱”已取消玻璃卡片背景，改为直接显示文字并放大约 1.5 倍。
- 首页主文案已改为“用于制作发布一些小工具，开发中~~”。
- 首页说明段落和右下角三个占位卡片已删除。
- 参考站 `cho-kaguyahime.com` 首页核心效果是暗色霓虹首屏、中央大圆形主视觉、环形装饰、右上圆形菜单、侧边按钮和底部滚动提示。
- 当前本地首页已改成类似的视觉结构：中央大圆圈轮播、装饰轨道、霓虹云形线框、右侧按钮、右上 MENU 圆按钮和底部 SCROLL 提示。
- 中央轮播通过 Vite `import.meta.glob` 自动引入 `images` 文件夹中的图片格式资源，排除 mp4；图片使用 `object-fit: cover` 保持比例并铺满圆形容器。

## 后续候选工具
- 文本处理：格式化、去重、批量替换、大小写转换。
- 图片工具：压缩、尺寸调整、格式转换。
- 日常计算：日期差、单位换算、比例计算。
- 二维码工具：生成、解析、批量生成。
- 清单工具：临时待办、共享清单。

## 风险与注意事项
- 背景图如有版权限制，公开部署前需要确认来源和授权。
- 如果朋友在国内访问，部署平台和域名备案可能影响访问稳定性。
- 若后续加入文件处理工具，应优先在浏览器本地完成，避免上传隐私文件。
- `images/27_clear.png` 体积约 18MB，当前会被打包进首页轮播；后续发布前建议压缩或移出轮播，以免影响首屏加载速度。

## 发布发现
- 2026-04-27 已发布轮播首页版本到 GitHub Pages。
- 线上地址：`https://aikyan210311.github.io/ano-tools/`
- 当前线上页面返回 HTTP 200。
- 线上页面资源 hash 与本地 `npm.cmd run build` 输出一致，说明本次发布内容已生效。
- GitHub REST API 公共请求被限流，后续如果需要自动查询 Actions 状态，建议使用已认证的 `gh` 或 GitHub token。

## 首页参考图改版发现
- 用户希望标题接近参考图一：厚重斜体、黑色投影、白色外发光、局部彩色光带。
- 用户希望背景接近参考图二：深蓝纹理背景、中央舞台圆形主视觉、霓虹和光束氛围。
- 用户希望漂浮物接近参考图三/图四：发光云纹、水母/贝壳类霓虹漂浮物。
- 用户希望右上角菜单点击后变成参考图五：横向展开容器、竖排菜单项，并带展开动画。
- 实现采用 CSS 图形和动画复刻视觉方向，不直接拷贝参考站图片资产。
- 本地验证通过，但尚未发布线上。

## 素材处理发现
- 新增素材：`images/title.png`、`images/漂浮元素.png`、`images/漂浮元素2.png`、`images/漂浮元素3.png`。
- 原始素材带浅色/棋盘底，不直接作为页面元素使用。
- 已生成透明背景资源到 `images/generated/`：
  - `title-cutout.png`
  - `float-1-cutout.png`
  - `float-2-cutout.png`
  - `float-3-cutout.png`
- 页面引用 `generated` 下的透明资源；轮播排除了原始标题和漂浮元素图片。
- 圆点数量上限设为 6，位置从圆盘左侧改为圆盘下方。

## 入场动画发现
- 最新本地版本已取消轮播圆点和 6 张图限制。
- 圆盘点击和键盘操作会主动切换下一张，自动轮播仍保留。
- 漂浮物暂时恢复为 CSS 绘制版本，不再使用 `float-*.png`。
- 已新增月亮 loading 与闪白转场，主页面元素按左右方向入场。
- 当前改动仍是本地版本，未提交、未推送、未发布。
- 最新细调已移除 title 下方小字。
- 轮播图改用 `object-fit: contain`，优先完整显示图片；圆盘内可能出现背景留边，这是避免裁切的代价。
- loading 闪白和主元素入场动画已放慢，入场位移加长。
- 2026-04-27：用户提供的 loading 图片文件实际名称为 `images/iloha.png`，本轮按该文件接入唱片中心图，并将 `iloha/iroha` 从首页轮播候选中过滤，避免 loading 素材进入主圆盘轮播。
- 2026-04-27：圆盘图片显示模式从 `contain` 改回 `cover`。该模式更适配多数比例不一的轮播图片，但会有少量边缘裁切；同时通过缩小圆盘边框和外部轨道外扩来增大可见图片区域。
## 2026-04-28 新番资讯页面发现
- 第一版采用纯前端静态数据，不接爬虫、不接后端，避免一开始引入数据源版权、稳定性和维护成本问题。
- 页面入口使用 `#anime` hash 路由，当前不引入 `react-router`，符合项目轻量阶段；后续页面增多时再迁移到正式路由。
- 追番状态使用 `localStorage` 保存，只对当前浏览器有效，不需要登录。
- 当前番剧资料为样例数据，页面上已标注“结构样例数据”，后续需要替换为真实季度资料。
- 2026 年 4 月周历数据已从 yuc.wiki 预置为本地静态数据，共 69 条周一到周日排播；当前只使用标题、封面、开播日期、更新时间和平台等结构化信息。
- 周历展示改成选中日模式，避免七列布局导致每天下方只能显示少量卡片；列表卡片只保留封面、番名、更新时间和集数，详情弹窗承载其他信息。
