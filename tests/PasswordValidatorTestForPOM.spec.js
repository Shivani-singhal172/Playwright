import { test, expect } from '@playwright/test';
import BasePage from '../Utils/BasePage';
import passwordValidatorPage from '../pages/passwordValidatorPage';
import testData from '../testdata/PasswordData.json' with {type: "json"};
let passwordPage;

test.beforeEach(async ({ page }) => {
    passwordPage = new passwordValidatorPage(page);
    await page.goto(
        BasePage.getProperty('baseUrlPasswordVal')
    );
});

test('password Validator character length is less than 8 ', async ({ page }) => {
    await passwordPage.enterPassword(testData.shortPassword);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError);
});

test('password Validator character length is more than 15', async ({ page }) => {
    await passwordPage.enterPassword(testData.longPassword);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError);
});

test('password Validator character has only numeric values ', async ({ page }) => {
    await passwordPage.enterPassword(testData.allNumericPassword);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);

});

test('password Validator character has only special characters ', async ({ page }) => {
    await passwordPage.enterPassword(testData.allSpecialChar);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);

});

test('password Validator character has only consecutive numbers ', async ({ page }) => {
    await passwordPage.enterPassword(testData.consecutiveNumber);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);

});

test('password Validator character has only consecutive letters ', async ({ page }) => {
    await passwordPage.enterPassword(testData.consecutiveLetters);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);

});

test('password Validator character has month name', async ({ page }) => {
    await passwordPage.enterPassword(testData.monthName);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError);

});

test('password Validator character has Day name', async ({ page }) => {
    await passwordPage.enterPassword(testData.dayName);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);

});

test('password Validator character has Mobile number with  country code as 0', async ({ page }) => {
    await passwordPage.enterPassword(testData.countryCodeAs0);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);
});

test('password Validator character has Mobile number without country code as 0', async ({ page }) => {
    await passwordPage.enterPassword(testData.withoutcountrycode);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);
});

test('password Validator character has Mobile number with  country code as 91', async ({ page }) => {
    await passwordPage.enterPassword(testData.countrycodeAs91);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);
});


test('password Validator character has Mobile number with country code as +91', async ({ page }) => {
    await passwordPage.enterPassword(testData.countrycodeAsPlus91);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);
});


test('password Validator character has all characters as upper case', async ({ page }) => {
    await passwordPage.enterPassword(testData.AllUpperCase);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);
});


test('password Validator character has all characters as lower case', async ({ page }) => {
    await passwordPage.enterPassword(testData.AllLoweCase);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedPasswordError2);

});

test('password Validator character has all characters as per check', async ({ page }) => {
    await passwordPage.enterPassword(testData.validPassword);
    await passwordPage.clickCheck();
    await expect(passwordPage.resultMessage).toContainText(testData.expectedSuccessMessage);

});