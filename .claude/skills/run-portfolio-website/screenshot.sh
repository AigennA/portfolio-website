#!/bin/bash
set -e

cd /home/user/portfolio-website

# Ensure server is running
if ! curl -s -o /dev/null http://localhost:8080 2>/dev/null; then
  python3 -m http.server 8080 &
  sleep 1
fi

# Install puppeteer if needed
if [ ! -d /tmp/node_modules/puppeteer ]; then
  cd /tmp && npm install puppeteer 2>/dev/null
fi

cd /tmp
node -e "
const puppeteer = require('puppeteer');
(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'] });
  const page = await browser.newPage();

  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2', timeout: 15000 });
  await sleep(2000);
  await page.screenshot({ path: '/home/user/portfolio-website/screenshot-mobile.png', fullPage: false });
  console.log('Mobile screenshot saved');

  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2', timeout: 15000 });
  await sleep(2000);
  await page.screenshot({ path: '/home/user/portfolio-website/screenshot-desktop.png', fullPage: false });
  console.log('Desktop screenshot saved');

  await browser.close();
})();
"
