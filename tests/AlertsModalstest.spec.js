import { test, expect } from '@playwright/test';
const BasePage = require('../Utils/BasePage');
const AlertAndModalPage = require('../pages/AlertAndModalPage');
let alertAndModalPage;

test.beforeEach(async ({ page }) => {
  alertAndModalPage = new AlertAndModalPage(page);
  await page.goto(
    BasePage.getProperty('baseUrlAutomationMasterPage')
  );
  await page.locator("//a[@href='alerts-modals.html']").click();
  await page.waitForTimeout(2000);
});

test('Javascript Alert ', async ({ page }) => {
  const dialogPromise = page.waitForEvent('dialog');
  page.locator("//button[text()='Show Alert']").click();
  const dialog = await dialogPromise;
  const msg = dialog.message();
  dialog.accept();
  expect(dialog.message()).toBe(msg);
});

test('Confirm Dialog', async ({ page }) => {
  //Confirm Dialog
  const dialogPromise1 = page.waitForEvent('dialog');
  page.locator("//button[text()='Show Confirm Dialog']").click();
  const dialog1 = await dialogPromise1;
  const msg1 = dialog1.message();
  dialog1.accept();
  expect(dialog1.message()).toBe(msg1);
  await expect(page.locator('#confirmResult')).toHaveText('You clicked OK!');

});

test('Prompt Dialog', async ({ page }) => {
  //Prompt Dialog
  const dialogPromise2 = page.waitForEvent('dialog');
  page.locator("//button[text()='Show Prompt']").click();
  const dialog2 = await dialogPromise2;
  const msg2 = dialog2.message();
  dialog2.accept('Shivani');
  expect(dialog2.message()).toBe(msg2);
  await expect(page.locator('#promptResult')).toHaveText('Hello, Shivani! Welcome!');

});

test('Simple Modal', async ({ page }) => {
  // Simple Modal
  await page.locator("//button[text()='Open Simple Modal']").click();
  await expect(page.locator('#simpleModal')).toBeVisible();
  const msg3 = await page.locator("//div[@id='simpleModal']//p").textContent();
  console.log("The simple modal message is:", msg3);
  expect(msg3).toBe('This is a simple modal dialog. Click the X button or outside the modal to close it.');
  await page.locator("//div[@id='simpleModal']//button").click();
  await expect(page.locator('#simpleModal')).not.toBeVisible();

});
test('confirmation modal', async ({ page }) => {
  //confirmation modal
  await page.locator("//button[text()='Open Confirmation Modal']").click();
  await expect(page.locator('#confirmModal')).toBeVisible();
  const msg4 = await page.locator("//div[@id='confirmModal']//p").textContent();
  console.log("The confirmation modal message is:", msg4);
  expect(msg4).toBe('Are you sure you want to proceed with this action?');
  await page.locator("//div[@id='confirmModal']//button[text()='Confirm']").click();
  await page.waitForTimeout(1000);
  await expect(page.locator('#modalConfirmResult')).toHaveText('You confirmed the action!');
  await expect(page.locator('#confirmModal')).not.toBeVisible();
});

test('Form Modal', async ({ page }) => {
  //Form Modal
  await page.locator("//button[text()='Open Form Modal']").click();
  await expect(page.locator('#formModal')).toBeVisible();
  await page.locator('input[id="modalName"]').fill('Shivani');
  await page.locator("//input[@id='modalEmail']").fill('shivani@example.com');
  await page.locator("//div[@id='formModal']//button[text()='Submit']").click();
  await expect(page.locator('#formModalResult')).toHaveText('Form submitted! Name: Shivani, Email: shivani@example.com');
});

test('Delayed Modal', async ({ page }) => {
  //Delayed Modal
  await page.locator("//button[text()='Show Modal (2s delay)']").click();
  await page.waitForTimeout(2000);
  const msg5 = await page.locator("//div[@id='delayedModal']//p").textContent();
  console.log("The delayed modal message is:", msg5);
  expect(msg5).toBe('This modal appeared after a 2-second delay. Practice waiting for it to appear!');
  await page.locator("//div[@id='delayedModal']//button[text()='Close']").click();
});

