import { test, expect } from '@playwright/test';
import passwordDataforTDD from '../testData/passwordDataforTDD.json' with {type: "json"};


for (let i = 0; i < passwordDataforTDD.passwordValidation.length; i++) {

    test(passwordDataforTDD.passwordValidation[i].scenario, async ({ page }) => {
        await page.goto("file:///Users/shivanisinghal/Desktop/password-validator/index.html");
        await page.getByPlaceholder("Enter password").fill(passwordDataforTDD.passwordValidation[i].password);
        await page.getByRole('button', { name: 'Check' }).click();
        await expect(page.locator('#result')).toContainText(passwordDataforTDD.passwordValidation[i].expectedMessage);
    });
}
