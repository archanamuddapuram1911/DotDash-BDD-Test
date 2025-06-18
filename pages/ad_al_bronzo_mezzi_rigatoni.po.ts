import { Locator, Page } from '@playwright/test';

export class foodAndWine {
  
  constructor(public readonly page: Page) {

  }

  // Locator getter
  public get al_bronzo_mezzi_rigatoni() : Locator { 
    return this.page.locator('img[alt*="Al Bronzo Mezzi Rigatoni"]').nth(0);
  }

  public get lastText() : Locator { 
    console.log(this.page.locator('p').last().textContent());
    return this.page.locator('a').last();
  }

  public get verifyTermsOfService() : Locator { 
    return this.page.getByText('Terms of Service').nth(0);
  }

}
