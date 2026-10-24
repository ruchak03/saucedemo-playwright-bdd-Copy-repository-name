
import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  private page: Page;
  private cartItem: Locator;
  private checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartItem = page.locator(
      '[data-test="inventory-item-name"]',
      { hasText: 'Sauce Labs Backpack' }
    );

    this.checkoutButton = page.locator('#checkout');
  }

  async verifyProductInCart() {
    await expect(this.cartItem).toHaveCount(1);
    await expect(this.cartItem).toHaveText('Sauce Labs Backpack');
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}
