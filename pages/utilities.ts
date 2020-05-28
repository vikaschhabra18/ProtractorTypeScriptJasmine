import { browser, element, protractor, by } from "protractor";
import { Login } from "./login";
import assert = require("assert");

export class Utility {

    static element: any;
    static replacedXpath: any;

    constructor() {

    }

    static getPageDescriptor(elementName: string, pageName: string) {
        switch (pageName) {
            case "Login":
                const login: Login = new Login(elementName);
                this.element = login.elementIdentifier;
                break;

            default:
                this.element = null;
                break;
        }
    }
    static async enterText(elementName: string, pageName: string, text: string) {
        this.getPageDescriptor(elementName, pageName);
        var elmnt = this.element;
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(element(elmnt)), 50000).then(async function (isVisible) {
            if (isVisible) {
                await element(elmnt).clear();
                await element(elmnt).sendKeys(text);
            } else {
                assert.fail("element: " + elmnt + " is not visible");
            }
        });
    }
    static async clickOnItem(elementName: string, pageName: string) {
        this.getPageDescriptor(elementName, pageName);
        var EC = protractor.ExpectedConditions;
        var elmnt = this.element;
        await this.waitForElementVisible(elmnt);
        await this.scrollToElement(elmnt);
        await browser.wait(EC.elementToBeClickable(element(elmnt)), 40000).then(async function (isClickable) {
            if (isClickable) {
                await element(elmnt).click();
            } else {
                assert.fail("element: " + elmnt + " is not clickable");
            }
        });
    }
    static async waitForElementPresent(elementName: any) {
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(element(elementName)), 30000);
    }

    static async waitForElementVisible(elementName: any) {
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(element(elementName)), 30000);
    }

    static async waitForElementClickable(elementName: any) {
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.elementToBeClickable(element(elementName)), 40000);
    }
    static async scrollDown() {
        while (await browser.executeScript('window.scrollTo(0, document.body.scrollHeight);')) {
            await browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        }
    }
    static async scrollUp() {
        await browser.executeScript('window.scrollTo(0,0);');
    }
    static async scrollToElement(element: any) {
        await this.scrollUp();
        while (!this.waitForElementVisible(element)) {
            await browser.actions().sendKeys(protractor.Key.PAGE_DOWN).perform();
        }
    }
    static async scrollToitem(elementName: string, pageName: string) {
        this.getPageDescriptor(elementName, pageName)
        var elmnt = element(this.element)
        await browser.executeScript("arguments[0].scrollIntoView(true)", elmnt);
    }
   static async selectFromDropdown(elementName: string, pageName: string, itemToSelect: string) {
        this.getPageDescriptor(elementName, pageName)
        await this.waitForElementPresent(this.element);
        await this.waitForElementClickable(this.element);
        await element(this.element).all(by.xpath('option[.="' + itemToSelect + '"]')).click();
    }

   static async selectValueFromDropdown(elementName: string, pageName: string, valueToSelect: string) {
        this.getPageDescriptor(elementName, pageName)
        await this.waitForElementPresent(this.element);
        await this.waitForElementClickable(this.element);
        await element(this.element).$('[value="' + valueToSelect + '"]').click();
    }

   static async selectIndexFromDropdown(elementName: string, pageName: string, indexToSelect: string) {
        this.getPageDescriptor(elementName, pageName)
        await this.waitForElementPresent(this.element);
        await this.waitForElementClickable(this.element);
        //await element(this.element).all(by.xpath('//option["' + indexToSelect + '"]')).click();
        await element(this.element).all(by.cssContainingText('option', indexToSelect)).click();
    }

   static async selectTextFromDropdown(elementName: string, pageName: string, itemToSelect: string) {
        this.getPageDescriptor(elementName, pageName)
        await this.waitForElementPresent(this.element);
        await this.waitForElementClickable(this.element);
        await element(this.element).all(by.xpath('.//option[contains(text(),"' + itemToSelect + '")]')).click();
    }
   static async getElementText(elementName: string, pageName: string) {
        var elementText;
        this.getPageDescriptor(elementName, pageName)
        await this.waitForElementVisible(this.element);
        await this.waitForElementClickable(this.element);
        return await element(this.element).getText().then(function (text) {
            return elementText = text;
        });
    }
   static async isElementDisplayed(elementName: string, pageName: string) {
        this.getPageDescriptor(elementName, pageName)
        var EC = protractor.ExpectedConditions;
        return await browser.wait(EC.presenceOf(element(this.element)), 5000).then(function (result) {
            return result ? true : false;
        });
        // return await element(this.element).isDisplayed().then(function(result){
        //     return result ? true : false;
        // });
        // if(!element(this.element).isDisplayed())        
        // {
        //     assert.fail(""+elementName+" is not displayed"); 
        // }
    }
   static async isElementVisible(elementName: string, pageName: string) {
        this.getPageDescriptor(elementName, pageName)
        var EC = protractor.ExpectedConditions;
        return await browser.wait(EC.visibilityOf(element(this.element)), 5000).then(function (result) {
            return result ? true : false;
        });
    }

   static async isElementNotDisplayed(elementName: string, pageName: string) {
        this.getPageDescriptor(elementName, pageName)
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(element(this.element)), 5000);
        if (element(this.element).isDisplayed()) {
            assert.fail("" + elementName + " is displayed");
        }
    }
   static async isElementNotVisible(elementName: string, pageName: string) {
        var EC = protractor.ExpectedConditions;
        await this.getPageDescriptor(elementName, pageName)
        await browser.wait(EC.invisibilityOf(element(this.element)), 5000);
        return await element(this.element).isPresent().then(function (result) {
            return result ? true : false;

        });

    }
   static async isElementEnabled(elementXpath: string) {
        return await element(by.xpath(elementXpath)).isEnabled().then(function (result) {
            return result ? true : false;
        });
    }

   static async checkIfElementEnabled(elementName: string, pageName: string) {
        this.getPageDescriptor(elementName, pageName)
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(element(this.element)), 5000);
        return await element(this.element).isEnabled().then(function (result) {
            return result ? true : false;
        });
    }

   static async replaceAndCheckIfElementEnabled(elementName: string, pageName: string, replaceWithText: string) {
        this.getPageDescriptor(elementName, pageName)
        this.replacedXpath = this.element.replace("^", replaceWithText);
        //this.waitForElementVisible(by.xpath(this.replacedXpath));
        return await element(by.xpath(this.replacedXpath)).isEnabled().then(function (result) {
            return result ? true : false;
        });
    }

   static async checkIfElementPresent(elementName: string, pageName: string) {
        this.getPageDescriptor(elementName, pageName)
        return await element(this.element).isPresent().then(function (result) {
            return result ? true : false;
        });
    }

   static async checkIfElementDisplayed(elementName: string, pageName: string) {
        this.getPageDescriptor(elementName, pageName)
        return await element(this.element).isDisplayed().then(function (result) {
            return result ? true : false;
        });
    }

}