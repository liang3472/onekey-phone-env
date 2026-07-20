# OneKey Phone Env

扫码下载 Android APK 的静态页面，可直接部署到 Vercel。

## 本地预览

在本目录启动任意静态服务器，例如：

```powershell
npx --yes serve .
```

打开提示的本地地址，页面中间会显示指向 `/assets/app-debug.apk` 的二维码。

## 部署到 Vercel

1. 将本仓库推送到 GitHub（当前目录即 `onekey-phone-env` 仓库根目录）。
2. 在 [Vercel](https://vercel.com) 导入该仓库。
3. Framework Preset 选 **Other**，根目录保持默认，直接 Deploy。

部署完成后访问站点首页即可扫码下载；APK 地址为：

`https://你的域名/assets/app-debug.apk`

## 更新 APK

在上级 `soul-env` 项目执行：

```powershell
.\gradlew.bat assembleDebug
```

构建产物会复制到本目录的 `assets/app-debug.apk`，提交并重新部署即可。
