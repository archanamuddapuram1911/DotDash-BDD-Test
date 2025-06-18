import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { localOffers } from '../pages/localoffers.po';


Given('I open the smoked turkey recipe page', { timeout: 30000 }, async function () {
    const offerpage = new localOffers(this.page);
    await offerpage.page.goto('https://www.allrecipes.com/how-to-smoke-a-turkey-recipe-8740025');

})

Then('the Local Offers ad is visible', { timeout: 30000 }, async function () {
  const offerpage = new localOffers(this.page);
  let i = 0;
    await offerpage.page.keyboard.press("Enter");
    while (i < 400) {
      if (await offerpage.editButton.isVisible()) {
        await offerpage.editButton.click();
        break;
      }
      await offerpage.page.keyboard.press("ArrowDown");
      await offerpage.page.waitForTimeout(50);
      i++;
    }
    await offerpage.searchByZipTextBox.isVisible();

})

Then('I check for Local offers ad visibility and update the zipCode', { timeout: 30000 }, async function () {
  const offerpage = new localOffers(this.page);
  await offerpage.searchByZipTextBox.click();
    await offerpage.searchByZipTextBox.fill('07304');
    await offerpage.searchByZipTextBox.click();
    await offerpage.page.keyboard.press("Enter");
    await offerpage.updateButton.click();
    await offerpage.page.waitForTimeout(2000);
    await offerpage.updateButton.click();
    await expect(offerpage.walmart).toBeInViewport();

})

Then('I click on Add to walmart cart and validate total cart amount', { timeout: 30000 }, async function () {
  const offerpage = new localOffers(this.page);
  await offerpage.page.waitForTimeout(2000);
  await offerpage.AddtoWalmartCart.click();
  await expect(offerpage.cartTotal).toHaveText('Total: $77.38');
})

Then('I swap an item and validate the updated cart amount', { timeout: 30000 }, async function () {
  const offerpage = new localOffers(this.page);
  await offerpage.swapButtonFor('Salt').click();
  await offerpage.swapSalt('LA FINA IODIZED TABLE SALT 26 OZ CANISTER').click();
  await expect(offerpage.cartTotal).toHaveText('Total: $75.43');

})
  






