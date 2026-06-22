import { test, expect } from '@playwright/test';

test('File upload test', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/automation-practice-master/app/index.html');

    await page.locator("//a[@href='file-upload.html']").click();

    //single file upload
    const fileChooserPromise = page.waitForEvent('filechooser');

    await page.locator("//p[text()='Select a single file']").click();

    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('resources/ShivaniSinghal.pdf');

    await page.waitForTimeout(5000);

    await page.locator("//div[@id='singleFileResult']/preceding-sibling::button").click();
    const successmsg = await page.locator("//div[@id='singleFileResult']").textContent();
    console.log("The success msg is ", successmsg);
    expect(successmsg).toBe('✅ File "ShivaniSinghal.pdf" uploaded successfully!');

    //Multiple file upload
    const multiFileChooserPromise = page.waitForEvent('filechooser');

    await page.locator("//p[text()='Hold Ctrl/Cmd to select multiple files']").click();

    const multiFileChooser = await multiFileChooserPromise;
    await multiFileChooser.setFiles(['resources/ShivaniSinghal.pdf', 'resources/Shivani_QALead (1).pdf', 'resources/Rishabh Singhal_Biodata(by createmybiodata.com).pdf']);

    await page.waitForTimeout(5000);

    await page.locator("//div[@id='multipleFileResult']/preceding-sibling::button").click();
    const multiSuccessMsg = await page.locator("//div[@id='multipleFileResult']").textContent();
    console.log("The success msg is ", multiSuccessMsg);
    expect(multiSuccessMsg).toBe('✅ 3 file(s) uploaded successfully!');

    //file type restriction
    const fileTypeChooserPromise = page.waitForEvent('filechooser');

    await page.locator("//p[text()='🖼️ Upload Image File']").click();

    const fileTypeChooser = await fileTypeChooserPromise;
    await fileTypeChooser.setFiles('resources/Screenshot 2024-04-08 at 12.23.41 PM.png');

    await page.waitForTimeout(5000);
    await page.locator("//div[@id='imageFileResult']/preceding-sibling::button").click();
    const fileTypeSuccessMsg = await page.locator("//div[@id='imageFileResult']").textContent();
    console.log("The success msg is ", fileTypeSuccessMsg);
    expect(fileTypeSuccessMsg).toBe('✅ Image \"Screenshot 2024-04-08 at 12.23.41 PM.png\" uploaded successfully!');

    //File Size Validation
    const fileSizeChooserPromise = page.waitForEvent('filechooser');
    await page.locator("//div[@class='container']/div[5]/div[1]").click();
    const fileSizeChooser = await fileSizeChooserPromise;

    await fileSizeChooser.setFiles('resources/largefile.pdf');

    await page.waitForTimeout(5000);
    await page.locator("//div[@id='sizeFileResult']/preceding-sibling::button").click();
    const fileSizeMsg = await page.locator("//div[@id='sizeFileResult']").textContent();
    console.log("The file size validation msg is ", fileSizeMsg);
    expect(fileSizeMsg).toBe('✅ File \"largefile.pdf\" uploaded successfully!');
});
