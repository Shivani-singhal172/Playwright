import { test, expect } from '@playwright/test';

test('Drop Down and select test', async ({ page }) => {

  await page.goto('file:///Users/shivanisinghal/Desktop/automation-practice-master/app/index.html');

  await page.locator("//a[@href='checkbox-radio.html']").click();

  await page.locator("//input[@id='checkbox4']").check();
  await page.locator("//button[text()='Show Selected Checkboxes']").click();
  await expect(page.locator("//div[@id='checkboxResult']")).toHaveText('Selected: option4');
  await page.locator("//button[text()='Select All']").click();
  await page.locator("//button[text()='Show Selected']").click();
  await expect(page.locator("//div[@id='checkboxResult']")).toHaveText('Selected items: item1, item2, item3, item4, item5');
  await page.locator("//button[text()='Deselect All']").click();
  await page.locator("//button[text()='Show Selected']").click();
  await expect(page.locator("//div[@id='checkboxResult']")).toHaveText('No items selected');
  await page.locator("//input[@value='choice1']").check();
  await expect(page.locator("//div[@id='radioResult']")).toHaveText('Selected: choice1');


  await page.locator("//span[text()='Small']").check();
  await page.locator("//button[text()='Show Selected Options']").click();
  await expect(page.locator("//div[@id='multipleRadioResult']")).toHaveText('Size: small');
  await page.locator("//span[text()='Blue']").check();
  await page.locator("//button[text()='Show Selected Options']").click();
  await expect(page.locator("//div[@id='multipleRadioResult']")).toHaveText('Size: small | Color: blue');


  await page.locator("//span[text()='Enabled Checkbox']").check();
  await page.locator("//button[text()='Toggle Disabled State']").click();

  await expect(page.locator("//div[@id='disabledResult']")).toHaveText('Disabled checkbox: false, Disabled radio: false');


});