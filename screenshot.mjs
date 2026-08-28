import puppeteer from 'puppeteer-core';

(async () => {
  const browser = await puppeteer.launch({ 
    headless: true,
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' 
  });
  const page = await browser.newPage();
  
  // iPhone 13 Pro viewport
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  
  // Wait a bit for framer motion animations to finish
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  await page.screenshot({ path: 'mobile-screenshot.png', fullPage: true });
  console.log('Screenshot saved to mobile-screenshot.png');
  
  await browser.close();
})();
