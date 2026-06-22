import { test, expect } from '@playwright/test';

test('TableData', async ({ page }) => {

    await page.goto('file:///Users/shivanisinghal/Desktop/automation-practice-master/app/index.html');
    await page.locator("//a[@href='table-data.html']").click();

    //Table content
    const tableText = await page.locator('#basicTable').innerText();
    expect(tableText).toContain('John Doe');
    await page.locator("//button[text()='Extract All Data']").click();
    const tablecontent = await page.locator("//div[@id='extractResult']/pre").textContent();
    expect(tablecontent).toContain('John Doe');


    //sorted table
    for (let i = 1; i <= 4; i++) {
        await page.locator(`//table[@id='sortableTable']//th[${i}]`).click();

        const values = await page
            .locator(`//table[@id='sortableTable']//tbody//tr/td[${i}]`)
            .allTextContents();

        const actualValues = values.map(v => v.trim());

        const sortedValues = [...actualValues].sort((a, b) => {
            const valA = a.replace(/[$,%\s,]/g, '');
            const valB = b.replace(/[$,%\s,]/g, '');

            const numA = Number(valA);
            const numB = Number(valB);

            const isNumeric = !isNaN(numA) && !isNaN(numB);

            if (isNumeric) {
                return numA - numB;
            }

            return a.localeCompare(b);
        });

        console.log(`Column ${i}`);
        console.log('Actual:', actualValues);
        console.log('Expected:', sortedValues);

        expect(actualValues).toEqual(sortedValues);
    }

    //search table
    const inputtext = await page.locator('input[id="searchInput"]').fill('Sarah Connor');
    await page.locator('input[id="searchInput"]').press('Enter');

    let count = await page
        .locator("//table[@id='searchableTable']//tbody//tr")
        .filter({ visible: true })
        .count();
    expect(count).toBe(1);
    const searchResultText = await page.locator("//table[@id='searchableTable']//tbody//tr[1]").innerText();
    expect(searchResultText).toContain('Sarah Connor');

    //Table with pagination
    await page.locator("//button[text()='2']").click();
    const page2Text = await page.locator("//table[@id='paginationTable']//tbody//tr[1]/td[1]").innerText();
    expect(page2Text).toContain('6');

});

