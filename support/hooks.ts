import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

let browser: Browser;

Before(async function () {
  //browser = await chromium.launch({ headless: false });
  //const context = await browser.newContext();
  //const page = await context.newPage();

  // Inject the page object into the World
  //this.page = page;
  await this.init();
});

After(async function () {
  await this.close();
});


/*import {
    BeforeAll,
    AfterAll,
    Before,
    After,
    setDefaultTimeout,
    IWorld
  } from '@cucumber/cucumber';
  import { chromium, Browser, BrowserContext, Page } from 'playwright';
  
  setDefaultTimeout(60_000);
  
  declare module '@cucumber/cucumber' {
    interface IWorld {
      browser: Browser;
      context: BrowserContext;
      page: Page;
      offersFrame?: import('playwright').Frame;
      clickedUrl?: string;
    }
  }
  
  let globalBrowser: Browser;
  
  BeforeAll(async function () {
    // Launch browser once for all scenarios
    globalBrowser = await chromium.launch({ headless: false });
  });
  
  Before(async function (this: IWorld) {
    // Create a new context & page per scenario
    this.browser = globalBrowser;
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  });
  
  After(async function (this: IWorld) {
    // Clean up after each scenario
    await this.page.close();
    await this.context.close();
  });
  
  AfterAll(async function () {
    // Close the browser when everything is done
    await globalBrowser.close();
  });

  */