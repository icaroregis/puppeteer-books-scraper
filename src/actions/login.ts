import type { Page } from 'puppeteer';

export async function login(page: Page) {
  await page.goto('https://books.toscrape.com');
}
