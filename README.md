# 爱音的工具箱

一个给自己和朋友使用的小工具网页。当前版本先搭好 Vite + React + TypeScript 的前端底座，后续可以逐步添加具体工具。

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 发布到 GitHub Pages

项目已经包含 `.github/workflows/deploy.yml`。推送到 GitHub 的 `main` 分支后，在仓库设置中把 Pages 的 Source 设为 `GitHub Actions`，之后每次 push 都会自动构建并发布 `dist/`。

首次发布：

```bash
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

## 目录

- `src/App.tsx`：首页和工具入口配置。
- `src/styles.css`：全局样式、背景图和响应式布局。
- `images/`：站点图片资源。
