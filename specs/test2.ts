
import { browser, Config, protractor } from "protractor";
import { Utility } from "../pages/utilities";
const util = Utility;
describe('Protractor Demo App', async function () {
    it('should have a title', async function () {
        await browser.get('https://www.google.com/');
        console.log("Test 2")
        await util.enterText("GoogleSearch", "Login", "Automation Testing");
        await browser.sleep(2000)
        await util.clickOnItem("FirstOption", "Login")
        let title = await browser.getTitle()
        expect(title).toContain("automation testing");
    });
});