class passwordValidatorPage {

    constructor(page) {
        this.page = page;
        this.passwordInput = page.locator("//input[@id='password']");
        this.checkButton = page.locator("//button[text()='Check']");
        this.resultMessage = page.locator("//div[@id='result']");
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickCheck() {
        await this.checkButton.click();
    }

    async getResultMessage() {
        return await this.resultMessage.textContent();
    }
}

module.exports = passwordValidatorPage;