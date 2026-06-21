import { test, expect } from '@playwright/test';

test('Button Interactions', async ({ page }) => {
  
  await page.goto('file:///Users/shivanisinghal/Desktop/automation-practice-master/app/index.html');
 
  await page.locator("//a[@href='button-interactions.html']").click();
  await expect(page).toHaveTitle('Button Interactions Practice');
  await page.waitForTimeout(5000);
  await page.locator('button[id="primaryBtn"]').click();
  await expect(page.locator('button[id="primaryBtn"]')).toHaveText('Primary Button');

  await page.locator('button[id="secondaryBtn"]').click();
  await expect(page.locator('button[id="secondaryBtn"]')).toHaveText('Secondary Button');
  await page.locator('button[id="successBtn"]').click();
  await expect(page.locator('button[id="successBtn"]')).toHaveText('Success Button');
  await page.locator('button[id="dangerBtn"]').click();
  await expect(page.locator('button[id="dangerBtn"]')).toHaveText('Danger Button');
    await page.locator('button[id="counterBtn"]').click();
    await expect(page.locator('button[id="counterBtn"]')).toHaveText('Click Me!');
    await page.locator('button[id="toggleBtn"]').click();
    await expect(page.locator('button[id="disabledBtn"]')).toBeVisible();
    await page.locator('button[id="addBtn"]').click();
    await expect(page.locator('//button[starts-with(@id,"dynamicBtn")]')).toHaveText('Dynamic Button 1');
 await page.locator('button[id="removeBtn"]').click();
 await page.locator('button[id="doubleClickBtn"]').click();
  await expect(page.locator('button[id="doubleClickBtn"]')).toHaveText('Double Click Me!');
 await page.locator('button[id="delayBtn"]').click();
   await page.waitForTimeout(5000);
   await expect(page.locator('div[id="delayMessage"]')).toHaveText('Processing complete after 3 seconds!');
 await page.locator('button[id="rightClickBtn"]').click({
  button: 'right'
 });
 await expect(page.locator('div[id="rightClickMessage"]')).toHaveText('Right-click detected! Context menu opened.');
await page.locator('button[id="rightClickBtn1"]').click({
  button: 'right'
 });
  await expect(page.locator('div[id="multiRightClickMessage"]')).toHaveText('Right-clicked on Button 1. Action: Edit');
 
 await page.locator('button[id="rightClickBtn2"]').click({
  button: 'right'
 });
   await expect(page.locator('div[id="multiRightClickMessage"]')).toHaveText('Right-clicked on Button 2. Action: Copy');

 await page.locator('button[id="rightClickBtn3"]').click({
  button: 'right'
 });
   await expect(page.locator('div[id="multiRightClickMessage"]')).toHaveText('Right-clicked on Button 3. Action: Delete');

});
