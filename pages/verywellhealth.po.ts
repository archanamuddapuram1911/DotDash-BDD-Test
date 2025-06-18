import { Locator, Page } from '@playwright/test';

export class veryWellHealth {
  
  constructor(public readonly page: Page) {

  }

  // Locator getter
  public get brainAndNervousSystemComponent() : Locator { 
    return this.page.locator('.block__title').getByText("Migraine and Your Life: A Guide to Your Daily Well-Being"); // use actual selector
  }

  public get checkforMedicalReviewer() : Locator { 
    return this.page.locator('.mntl-attribution__item-name').getByText("Sohaib Imtiaz, MD "); // use actual selector
  }
}
