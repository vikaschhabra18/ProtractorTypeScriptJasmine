
import { browser, Config, protractor } from "protractor";
console.log("hi")
describe('Protractor Demo App', async function () {
    it('should have a title', async function () {
        await browser.get('https://www.youtube.com/watch?v=_WC3PXWpmZ4');
        console.log("Youtube")
        let title = await browser.getTitle()
        expect(title).toContain("Manali");
        let url = 'https://www.youtube.com/watch?v=_WC3PXWpmZ4';
        for (let i = 0; i < 100; i++) {
            await browser.executeScript("window.open(arguments[0], '_blank')", url);
            await browser.getAllWindowHandles().then(async (handles) => {
                await browser.switchTo().window(handles[i]);    // pass the index, here assuming that
                // there are only two tabs in the browser
            })
        }
        await browser.sleep(19000);
    });
});
