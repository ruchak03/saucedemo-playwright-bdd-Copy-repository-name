
import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  private page: Page;
  private addToCartButton: Locator;
  private cartLink: Locator;
  private productsTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartLink = page.locator('.shopping_cart_link');
    this.productsTitle = page.locator('.title');
  }

  async verifyProductsPage() {
    await expect(this.productsTitle).toHaveText('Products');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
    await this.page.waitForTimeout(1500);
  }

  async openCart() {
    await this.cartLink.click();
    await this.page.waitForTimeout(1500);
  }
}
