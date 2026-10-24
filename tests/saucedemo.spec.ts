
import { test, expect } from '@playwright/test';

test('Login and add product to cart', async ({ page }) => {

  // Step 1: Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Step 3: Verify Products page
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.getByText('Products', { exact: true })).toBeVisible();

  // Step 4: Add Sauce Labs Backpack to cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // Step 5: Verify cart count
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Step 6: Pause to inspect the result
  await page.pause();

});
