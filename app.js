(() => {
  const apkPath = "./assets/app-debug.apk";
  const apkUrl = new URL(apkPath, window.location.href).href;

  const qrHost = document.getElementById("qr");
  const urlLabel = document.getElementById("apk-url");
  const downloadBtn = document.getElementById("download-btn");

  downloadBtn.href = apkPath;
  urlLabel.textContent = apkUrl;

  if (typeof QRCode === "undefined") {
    urlLabel.textContent = "二维码库加载失败，请使用下方按钮下载。";
    return;
  }

  qrHost.replaceChildren();
  new QRCode(qrHost, {
    text: apkUrl,
    width: 256,
    height: 256,
    colorDark: "#14201c",
    colorLight: "#fffdf8",
    correctLevel: QRCode.CorrectLevel.M,
  });
})();
