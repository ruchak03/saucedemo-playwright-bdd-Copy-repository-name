
import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  private firstName: Locator;
  private lastName: Locator;
  private postalCode: Locator;
  private continueButton: Locator;
  private finishButton: Locator;
  private confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.confirmationMessage = page.locator('.complete-header');
  }

  async enterCustomerDetails(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstName.fill(firstName);
    await this.page.waitForTimeout(1500);

    await this.lastName.fill(lastName);
    await this.page.waitForTimeout(1500);

    await this.postalCode.fill(postalCode);
    await this.page.waitForTimeout(1500);
  }

  async continueToOverview() {
    await this.continueButton.click();
    await this.page.waitForTimeout(2000);
  }

  async finishOrder() {
    await this.finishButton.click();
    await this.page.waitForTimeout(3000);
  }

  async verifyOrderConfirmation() {
    await expect(this.confirmationMessage).toHaveText(
      'Thank you for your order!'
    );

    // Keep the confirmation visible during the demo
    await this.page.waitForTimeout(5000);
  }
}
