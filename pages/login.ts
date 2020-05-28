import { browser, element, by } from "protractor";
import * as assert from 'assert';
import { Utility } from "./utilities";
let util = Utility
export class Login {
    public elementIdentifier: any;
    constructor(elementName) {
        switch (elementName) {
            case "GoogleSearch":
                this.elementIdentifier = by.name("q");
                break;
            case "FirstOption":
                this.elementIdentifier = by.xpath('(//*[@role="option"])[1]');
                break;

            default:
                this.elementIdentifier = null;
                assert.fail("No such element found");

        }
    }

    static async pageSpecificFunction(elementName, pageName) {
        let elmnt: any = util.getPageDescriptor(elementName, pageName);
        await element(elmnt).sendkeys("ABC")
    }
}