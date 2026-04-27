const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('http://localhost:5173/');
  await p.waitForTimeout(5000);
  await p.screenshot({ path: 'screenshot.png' });
  await b.close();
})()