import { Browser, Page, chromium } from '@playwright/test';
//Not Used

let browser: Browser | null = null;

export async function launchBrowser(): Promise<Browser> {
  if (!browser) {
    browser = await chromium.launch({
      headless: false,
      slowMo: 100 // Optional: slows down steps for visibility
    });
  }
  return browser;
}

export async function getPage() {
  const browser = await launchBrowser();
  const context = await browser.newContext();
  const page = await context.newPage();
  return page;
}