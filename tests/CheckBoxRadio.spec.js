import { test, expect } from '@playwright/test';
const BasePage = require('../Utils/BasePage');

test.beforeEach(async ({ page }) => {
  await page.goto(
    BasePage.getProperty('baseUrlAutomationMasterPage')
  );
  await page.locator("//a[@href='checkbox-radio.html']").click();
  await page.waitForTimeout(2000);
});


test('Basic Checkboxes', async ({ page }) => {
  await page.locator("//input[@id='checkbox4']").check();
  await page.locator("//button[text()='Show Selected Checkboxes']").click();
  await expect(page.locator("//div[@id='checkboxResult']")).toHaveText('Selected: option4');
});

test('Select All / Deselect All', async ({ page }) => {
  await page.locator("//button[text()='Select All']").click();
  await page.locator("//button[text()='Show Selected']").click();
  await page.waitForTimeout(2000);
  await expect(page.locator("//div[@id='checkboxResult']")).toHaveText('Selected items: item1, item2, item3, item4, item5');
  await page.locator("//button[text()='Deselect All']").click();
  await page.locator("//button[text()='Show Selected']").click();
  await expect(page.locator("//div[@id='checkboxResult']")).toHaveText('No items selected');

});

test('Basic Radio Buttons', async ({ page }) => {
  await page.locator("//input[@value='choice1']").check();
  await expect(page.locator("//div[@id='radioResult']")).toHaveText('Selected: choice1');

});

test('Multiple Radio Groups', async ({ page }) => {
  await page.locator("//span[text()='Small']").check();
  await page.locator("//button[text()='Show Selected Options']").click();
  await expect(page.locator("//div[@id='multipleRadioResult']")).toHaveText('Size: small');
  await page.locator("//span[text()='Blue']").check();
  await page.locator("//button[text()='Show Selected Options']").click();
  await expect(page.locator("//div[@id='multipleRadioResult']")).toHaveText('Size: small | Color: blue');

});


test('Disabled Checkbox & Radio', async ({ page }) => {
  await page.locator("//span[text()='Enabled Checkbox']").check();
  await page.locator("//button[text()='Toggle Disabled State']").click();
  await expect(page.locator("//div[@id='disabledResult']")).toHaveText('Disabled checkbox: false, Disabled radio: false');
});