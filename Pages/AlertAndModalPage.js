class AlertAndModalPage {

    constructor(page) {
        this.page = page;
        this.alertForm = page.locator("//a[@href='alerts-modals.html']");
        this.showAlertButton = page.locator("//button[text()='Show Alert']");
        this.ShowConfirmDialogButton = page.locator("//button[text()='Show Confirm Dialog']");
        this.confirmDialogresulttext = page.locator('#confirmResult');
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickShowAlertButton() {
        await this.showAlertButton.click();
    }

    async clickAlertForm() {
        await this.alertForm.click();
    }

    async clickShowConfirmDialogButton() {
        await this.ShowConfirmDialogButton.click();
    }



    async getconfirmDialogresulttext() {
        return await this.confirmDialogresulttext.textContent();
    }
}

module.exports = AlertAndModalPage;