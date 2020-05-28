
import { browser, Config, protractor } from "protractor";
console.log("hi")
describe('Protractor Demo App', async function () {
    it('should have a title', async function () {
        await browser.get('https://mail.google.com/');
        console.log("Test 1")
        let title = await browser.getTitle()
        expect(title).toContain("Gmail");
    });
});