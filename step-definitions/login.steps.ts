
import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

let page: Page;
let loginPage: LoginPage;
let productPage: ProductPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

Given('User launches application', async function () {


  page = await this.browser.newPage();

  loginPage = new LoginPage(page);
  productPage = new ProductPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();


});

When('User enters username {string}', async function (username: string) {

  await loginPage.enterUsername(username);
});

When('User enters password {string}', async function (password: string) {
  
  await loginPage.enterPassword(password);
});

When('User clicks Login button', async function () {
  
  await loginPage.clickLogin();
});

Then('User should navigate to Products page', async function () {

  await expect(page).toHaveURL(/inventory\.html/);
  await productPage.verifyProductsPage();
});

When('User adds Sauce Labs Backpack to cart', async function () {
  
  await productPage.addProductToCart();
});

When('User opens the shopping cart', async function () {
  
  await productPage.openCart();
});

Then('The product should be displayed in the cart', async function () {
 
  await cartPage.verifyProductInCart();
});

When('User proceeds to checkout', async function () {
  
  await cartPage.clickCheckout();
});

When(
  'User enters customer details {string} {string} {string}',
  async function (
    firstName: string,
    lastName: string,
    postalCode: string
  ) {

    await checkoutPage.enterCustomerDetails(
      firstName,
      lastName,
      postalCode
    );
  }
);

When('User continues to the order overview', async function () {
  
  await checkoutPage.continueToOverview();
});

When('User finishes the order', async function () {
  
  await checkoutPage.finishOrder();
});

Then('Order confirmation should be displayed', async function () {
 
  await checkoutPage.verifyOrderConfirmation();
});
