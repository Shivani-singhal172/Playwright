import { test, expect } from '@playwright/test';

test('Drop Down and select test', async ({ page }) => {
  
  await page.goto('file:///Users/shivanisinghal/Desktop/automation-practice-master/app/index.html');
 
  await page.locator("//a[@href='dynamic-content.html']").click();
await page.locator("//button[text()='Load Content (3 second delay)']").click();
await page.waitForTimeout(5000);
await expect(page.locator("//div[@id='delayedContent']/p")).toHaveText('✅ Content loaded successfully after 3 seconds!');

await page.locator("//button[text()='Fetch Data']").click();
await page.waitForTimeout(5000);
await expect(page.locator("//div[@id='ajaxContent']/p")).toHaveText('Data fetched:');
await page.locator("//button[text()='Add Item']").click();
await expect(page.locator("//div[@id='item-1']")).toHaveText('Dynamic Item 1 (ID: item-1)');

await page.locator("//button[text()='Start Timer']").click();
await page.waitForTimeout(5000);
await page.locator("//div[@id ='timerDisplay']").textContent().then((text) => {
  const timerValue = parseFloat(text);
  console.log('Timer Value:', timerValue);  
  expect(timerValue).toBeGreaterThanOrEqual(0); 
});
await page.locator("//button[text()='Stop Timer']").click();

await page.locator("//button[text()='Start Progress']").click();
await page.waitForTimeout(1000);
const ProgressValueelement = await page.locator("//div[@id='progressFill']");
const progressValue = await ProgressValueelement.evaluate((el) => parseFloat(el.style.width));
console.log('Progress Value:', progressValue);  
expect(progressValue).toBeGreaterThanOrEqual(10);

await page.locator("//button[text()='Reset']").click();
const progressValue2 = await ProgressValueelement.evaluate((el) => parseFloat(el.style.width));
console.log('Progress Value after reset:', progressValue2);  
expect(progressValue2).toBeLessThanOrEqual(0);  

await page.locator("//button[text()='Show Success Message']").click();

await expect(page.locator("//div[@id='conditionalContent']/p")).toHaveText('✅ Success! Operation completed successfully.');

await page.locator("//button[text()='Show Error Message']").click();

await expect(page.locator("//div[@id='conditionalContent']/p")).toHaveText('❌ Error! Something went wrong.');

await page.locator("//button[text()='Show Info Message']").click();

await expect(page.locator("//div[@id='conditionalContent']/p")).toHaveText('ℹ️ Info: This is an informational message.');
 await page.locator("//button[text()='Show Text Gradually']").click();
 await page.waitForTimeout(5000);
 await expect(page.locator("//div[@id='gradualText']")).toHaveText('This text appears gradually, character by character. Perfect for practicing waits in automation!');

});

