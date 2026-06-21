import { test, expect } from '@playwright/test';

test('Submitting Form', async ({ page }) => {
  
  await page.goto('file:///Users/shivanisinghal/Desktop/automation-practice-master/app/index.html');
 
  await page.locator("//a[@href='form-submission.html']").click();
  await page.waitForTimeout(5000);
  await page.locator('input[id="fullName"]').fill('Shivani');
  await page.locator('input[type="email"]').fill('shivani@example.com');
  await page.locator('input[type="password"]').fill('password123');
  await page.locator('input[type="tel"]').fill('234567898');
  await page.locator('input[name="age"]').fill('32');
  await page.locator('#country').selectOption({ value: 'india' });
  await page.locator('textarea[name="bio"]').fill('I am a software tester with 5 years of experience in automation testing.');


});
