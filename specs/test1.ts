
import { browser, Config, protractor } from "protractor";
console.log("hi")
describe('Protractor Demo App', async function () {
    it('should have a title', async function () {
        await browser.get('https://www.youtube.com/watch?v=-8jUsj7T9m4');
        console.log("Youtube")
        let title = await browser.getTitle()
        expect(title).toContain("Kolkata");
        await browser.sleep(19000);
    });
});
