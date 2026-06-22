import { test, expect } from '@playwright/test';

test('Button Interactions', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/automation-practice-master/app/index.html');

    await page.locator("//a[@href='hover-tooltip.html']").click();

    //Basic Hover Effects
    await page.locator("//div[text()='Hover Me 1']").hover();
    await expect(
        page.locator('.result-display.show')
    ).toBeVisible();
    await expect(page.locator("//div[@id='hoverResult']")).toHaveText('✅ Hover element 1 hovered!');

    await page.waitForTimeout(2000);
    await page.locator("//div[text()='Hover Me 2']").hover();
    await expect(
        page.locator('.result-display.show')
    ).toBeVisible();
    await expect(page.locator("//div[@id='hoverResult']")).toHaveText('✅ Hover element 2 hovered!');

    await page.locator("//div[text()='Hover Me 3']").hover();
    await expect(
        page.locator('.result-display.show')
    ).toBeVisible();
    await expect(page.locator("//div[@id='hoverResult']")).toHaveText('✅ Hover element 3 hovered!');


    //Tooltips - Different Positions
    await page.locator("//span[text()='Hover Top']").hover();
    await expect(page.locator("//span[text()='This is a tooltip on top!']")).toHaveText('This is a tooltip on top!');

    await page.waitForTimeout(2000);
    await page.locator("//span[text()='Hover Bottom']").hover();
    await expect(page.locator("//span[text()='This is a tooltip at the bottom!']")).toHaveText('This is a tooltip at the bottom!');

    await page.waitForTimeout(2000);
    await page.locator("//span[text()='Hover Left']").hover();
    await expect(page.locator("//span[text()='This is a tooltip on the left!']")).toHaveText('This is a tooltip on the left!');

    await page.waitForTimeout(2000);
    await page.locator("//span[text()='Hover Right']").hover();
    await expect(page.locator("//span[text()='This is a tooltip on the right!']")).toHaveText('This is a tooltip on the right!');


    //Hover to Reveal Content

    await page.locator("//div[@class='hover-reveal']").hover();
    await expect(page.locator("//div[@class='hidden-content']")).
        toHaveText('🎉 This content appears when you hover! Perfect for testing hover interactions.');

    //Hover button with action
    await page.locator("//button[text()='Hover Me for Action']").hover();


    //TODO : how to locate elemet which is visible only wen hover on button, as it is not visible in DOM when not hovered, so cannot locate it.

    //Multiple Hover Elements
    await page.locator("//div[text()='Item 1']").hover();
    await expect(
        page.locator('.result-display.show').nth(1)
    ).toBeVisible();
    await expect(page.locator("//div[@id='multipleHoverResult']")).toHaveText('✅ Item 1 hovered!');

    await page.waitForTimeout(2000);
    await page.locator("//div[text()='Item 2']").hover();
    await expect(
        page.locator('.result-display.show').nth(1)
    ).toBeVisible();
    await expect(page.locator("//div[@id='multipleHoverResult']")).toHaveText('✅ Item 2 hovered!');

    await page.waitForTimeout(2000);
    await page.locator("//div[text()='Item 3']").hover();
    await expect(
        page.locator('.result-display.show').nth(1)
    ).toBeVisible();
    await expect(page.locator("//div[@id='multipleHoverResult']")).toHaveText('✅ Item 3 hovered!');

    await page.waitForTimeout(2000);
    await page.locator("//div[text()='Item 4']").hover();
    await expect(
        page.locator('.result-display.show').nth(1)
    ).toBeVisible();
    await expect(page.locator("//div[@id='multipleHoverResult']")).toHaveText('✅ Item 4 hovered!');

    await page.waitForTimeout(2000);
    await page.locator("//div[text()='Item 5']").hover();
    await expect(
        page.locator('.result-display.show').nth(1)
    ).toBeVisible();
    await expect(page.locator("//div[@id='multipleHoverResult']")).toHaveText('✅ Item 5 hovered!');

});
