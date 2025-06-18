import { Locator, Page } from '@playwright/test';

export class localOffers {
  
  constructor(public readonly page: Page) {

  }

  // Locator getter
  public get editButton() : Locator {
   
    return this.page.locator('.lrs_change_location_icon'); // use actual selector
  }

  public get searchByZipTextBox() : Locator{
    return this.page.locator('input.proxima-zipcode-intake-form-input');
  }

  public get updateButton() : Locator{
    return this.page.locator('button:has-text("Update")');
  }

  public get closeButton() : Locator{
    return this.page.locator('button.prx-modal__overlay__close-container__button');
  }

  public get walmart() : Locator{
    return this.page.getByAltText("Walmart logo").nth(0);
  }

  public get target() : Locator{
    return this.page.getByAltText("Target logo").nth(0);
  }

  public get AddtoWalmartCart() : Locator{
    return this.page.locator('button:has-text("Add to")').nth(0);
  }

  public get cartTotal() : Locator{
    return this.page.locator('.proxima-cart-footer-checkout__total');
  }

  async store(text: string) : Promise<boolean> {
    return this.page.locator('.retailers-carousel__slide-item').evaluateAll((elements, value) =>
      elements.some(el => el.innerHTML.includes(value)),
    text);

  }

  swapButtonFor(productName: string): Locator { 
    return this.page.locator(`div.product-item:has(h3:has-text("${productName}")) button:has-text("Swap")`);
  }

  swapSalt(productName: string): Locator { 
    return this.page.locator(`div.product-item:has(p:has-text("${productName}")) button:has-text("Use this Item")`);
  }

}

