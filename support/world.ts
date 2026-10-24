
import {
  setWorldConstructor,
  Before,
  After,
  World,
  setDefaultTimeout
} from '@cucumber/cucumber';

import { chromium, Browser } from '@playwright/test';

setDefaultTimeout(30 * 1000);

class CustomWorld extends World {
  browser!: Browser;
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: false
  });
});


After(async function (this: CustomWorld) {
  if (this.browser) {
    if (process.env.KEEP_BROWSER_OPEN === 'true') {
      console.log('Browser left open for inspection.');
      return;
    }

    await this.browser.close();
  }
});
