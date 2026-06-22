import { test, expect } from '@playwright/test';

test('Drop Down and select test', async ({ page }) => {

  await page.goto('file:///Users/shivanisinghal/Desktop/automation-practice-master/app/index.html');

  await page.locator("//a[@href='dropdown-select.html']").click();
  await page.locator('#country').selectOption({ value: 'india' });
  await expect(page.locator("//div[@id='countryResult']")).toHaveText('Selected country: India');
  await page.locator('#languages').selectOption({ value: 'javascript' });
  await page.locator("//button[text()= 'Show Selected Languages']").click();
  await expect(page.locator("//div[@id='languagesResult']")).toHaveText('Selected languages: JavaScript');
  await page.locator('#continent').click();
  await page.locator('#continent').selectOption({ value: 'asia' });
  await page.locator('#city').selectOption({ value: 'tokyo' });
  await expect(page.locator("//div[@id='cityResult']")).toHaveText('Selected city: Tokyo');
  await page.locator("//button[text()= 'Load Options']").click();

  await page.locator('#dynamicSelect').selectOption({ value: 'opt2' });
  await expect(page.locator("//div[@id='dynamicResult']")).toHaveText('Selected: Option 2');

  await page.locator('#groupedSelect').selectOption({
    value: 'win10'
  });
  await expect(page.locator("//div[@id='osResult']")).toHaveText('Selected OS: Windows 10');


});

