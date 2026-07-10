# Styling & Art Direction Portfolio Starter — Image-first edition

这是一个为造型师 / Art Director 准备的极简作品集模板。新版采用更克制、摄影作品优先的结构：

- 极简入口页：姓名、Works、Information
- Works 页面：大图项目流
- 项目详情：图片优先，项目介绍与 credits 放在底部
- Information 页面：简介、业务方向、客户与联系方式
- Astro 静态网站
- GitHub 保存内容
- Cloudflare Pages 免费托管
- Pages CMS 在线编辑项目与上传图片

## 本地预览

需要 Node.js 22.12 或更高版本。

```bash
npm install
npm run dev
```

打开终端显示的网址，一般是 `http://localhost:4321`。

## 修改内容

- 个人信息、客户名单：`src/data/site.json`
- 项目：`src/data/projects/*.json`
- 图片：`public/uploads/`
- 网站样式：`src/styles/global.css`

发布后可使用 Pages CMS，不必手动编辑 JSON。

## 发布到 Cloudflare Pages

连接 GitHub 仓库后使用：

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.12.0` 或更高

## 注意

示例 SVG 只是占位图。请替换为你有权公开使用的作品图片。此模板参考了极简摄影作品集常见的排版语言，但代码与界面均为重新设计。
Deployment refresh
Refresh latest deployment
