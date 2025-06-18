import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { veryWellHealth } from '../pages/verywellhealth.po'; 


Given('I navigate to the Verywell Health homepage', { timeout: 30000 }, async function (dataTable) {
    const url = dataTable.raw()[1][0];
    const healthPage = new veryWellHealth(this.page);
    await healthPage.page.goto(url); 
    //await healthPage.brainAndNervousSystemComponent.click();
    //await expect(healthPage.checkforMedicalReviewer).toBeVisible();
}
)

When('I click on the {string} link', { timeout: 30000 }, async function (linkName: string) {
    const healthPage = new veryWellHealth(this.page);
    await healthPage.brainAndNervousSystemComponent.click();
   // await expect(healthPage.checkforMedicalReviewer).toBeVisible();
}
)

Then('I should see the article header on the page', { timeout: 30000 }, async function () {
    const healthPage = new veryWellHealth(this.page);
    await expect(healthPage.checkforMedicalReviewer).toBeVisible();
}
)