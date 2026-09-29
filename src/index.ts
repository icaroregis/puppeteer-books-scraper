import puppeteer from 'puppeteer';
import { login } from './actions/login.js';

(async () => {
  // 0 PASSO INICIAR O BROWSER
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--disable-infobars', '--start-maximized'],
  });
  const page = await browser.newPage();

  // 1 PASSO FAZER O LOGIN
  await login(page);
})();
