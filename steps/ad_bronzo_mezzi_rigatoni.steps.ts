import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { foodAndWine } from '../pages/ad_al_bronzo_mezzi_rigatoni.po'; 


Given('I navigate to Food & Wine featured article page', { timeout: 30000 }, async function (dataTable) {
    const url = dataTable.raw()[1][0];
    const foodAndWinePage = new foodAndWine(this.page);
    await this.page.goto(url);
}
)

Then('I should see and click the AL BRONZO MEZZI RIGATONI product component', { timeout: 30000 }, async function () {
    const foodAndWinePage = new foodAndWine(this.page);
    await expect(foodAndWinePage.al_bronzo_mezzi_rigatoni).toBeVisible();
    await foodAndWinePage.al_bronzo_mezzi_rigatoni.click();
}
)

When('I should see click and verify the last text block on the page', { timeout: 30000 }, async function (dataTable) {
    const foodAndWinePage = new foodAndWine(this.page);
    const url = dataTable.raw()[1][0];
    await this.page.goto(url);
   await foodAndWinePage.lastText.click(); 
}
)