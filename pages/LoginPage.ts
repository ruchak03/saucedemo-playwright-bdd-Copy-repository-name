
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private username: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.waitForTimeout(1500);
  }

  async enterUsername(username: string) {
    await this.username.fill(username);
    await this.page.waitForTimeout(1000);
  }

  async enterPassword(password: string) {
    await this.password.fill(password);
    await this.page.waitForTimeout(1000);
  }

  async clickLogin() {
    await this.loginButton.click();
    await this.page.waitForTimeout(2000);
  }
}
