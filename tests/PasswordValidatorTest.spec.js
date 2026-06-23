import { test, expect } from '@playwright/test';

test('password Validator character length is less than 8 ', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("Shivani");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must be between 8 and 15 characters."
    );
});


test('password Validator character length is more than 15', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("Shivanisinghal123");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must be between 8 and 15 characters."
    );
});


test('password Validator character has only numeric values ', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("12345678901234");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_)."
    );
});


test('password Validator character has only special characters ', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("#$%^*@#$%^&*^%");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_)."
    );
});


test('password Validator character has only consecutive numbers ', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("0123456789");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_)."
    );
});


test('password Validator character has only consecutive letters ', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("abcdefghijklmn");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_)."
    );
});

test('password Validator character has month name', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("January");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must be between 8 and 15 characters."
    );
});


test('password Validator character has Day name', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("MonTueWedThur");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_)."
    );
});


test('password Validator character has Mobile number with  country code as 0', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("08802825904");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_)."
    );
});

test('password Validator character has Mobile number without country code as 0', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("8802825904");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_)."
    );
});

test('password Validator character has Mobile number with  country code as 91', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("918802825904");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_).");
});


test('password Validator character has Mobile number with country code as +91', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("+918802825904");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_).");
});


test('password Validator character has all characters as upper case', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("SHIVANISINGHA@1");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_).");
});


test('password Validator character has all characters as lower case', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("shivanisingh@1");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_).");
});


test('password Validator character has all characters as per check', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/password-validator/index.html');

    await page.locator("//input[@id='password']").fill("Shivanisingh@1");

    await page.locator("//button[text()='Check']").click();

    const result = page.locator("//div[@id='result']");

    await expect(result).toHaveText(
        "Congratulations ! Password is valid!");
});