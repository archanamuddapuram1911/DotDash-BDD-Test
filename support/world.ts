import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';

export class CustomWorld extends World {
browser!: Browser;
page!: Page;

constructor(options: any) {
super(options);
}

async init() {
this.browser = await chromium.launch({ headless: false });
const context = await this.browser.newContext();
this.page = await context.newPage();
}
async close() {
  await this.browser.close();
}
}

setWorldConstructor(CustomWorld);


/*
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Page } from '@playwright/test';

class CustomWorld extends World {
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
*/