"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const protractor_1 = require("protractor");
const login_1 = require("./login");
const assert = require("assert");
class Utility {
    constructor() {
    }
    static getPageDescriptor(elementName, pageName) {
        switch (pageName) {
            case "Login":
                const login = new login_1.Login(elementName);
                this.element = login.elementIdentifier;
                break;
            default:
                this.element = null;
                break;
        }
    }
    static enterText(elementName, pageName, text) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            var elmnt = this.element;
            var EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(elmnt)), 50000).then(function (isVisible) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isVisible) {
                        yield protractor_1.element(elmnt).clear();
                        yield protractor_1.element(elmnt).sendKeys(text);
                    }
                    else {
                        assert.fail("element: " + elmnt + " is not visible");
                    }
                });
            });
        });
    }
    static clickOnItem(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            var EC = protractor_1.protractor.ExpectedConditions;
            var elmnt = this.element;
            yield this.waitForElementVisible(elmnt);
            yield this.scrollToElement(elmnt);
            yield protractor_1.browser.wait(EC.elementToBeClickable(protractor_1.element(elmnt)), 40000).then(function (isClickable) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isClickable) {
                        yield protractor_1.element(elmnt).click();
                    }
                    else {
                        assert.fail("element: " + elmnt + " is not clickable");
                    }
                });
            });
        });
    }
    static waitForElementPresent(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            var EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.presenceOf(protractor_1.element(elementName)), 30000);
        });
    }
    static waitForElementVisible(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            var EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(elementName)), 30000);
        });
    }
    static waitForElementClickable(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            var EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.elementToBeClickable(protractor_1.element(elementName)), 40000);
        });
    }
    static scrollDown() {
        return __awaiter(this, void 0, void 0, function* () {
            while (yield protractor_1.browser.executeScript('window.scrollTo(0, document.body.scrollHeight);')) {
                yield protractor_1.browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
            }
        });
    }
    static scrollUp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript('window.scrollTo(0,0);');
        });
    }
    static scrollToElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.scrollUp();
            while (!this.waitForElementVisible(element)) {
                yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.PAGE_DOWN).perform();
            }
        });
    }
    static scrollToitem(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            var elmnt = protractor_1.element(this.element);
            yield protractor_1.browser.executeScript("arguments[0].scrollIntoView(true)", elmnt);
        });
    }
    static selectFromDropdown(elementName, pageName, itemToSelect) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            yield this.waitForElementPresent(this.element);
            yield this.waitForElementClickable(this.element);
            yield protractor_1.element(this.element).all(protractor_1.by.xpath('option[.="' + itemToSelect + '"]')).click();
        });
    }
    static selectValueFromDropdown(elementName, pageName, valueToSelect) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            yield this.waitForElementPresent(this.element);
            yield this.waitForElementClickable(this.element);
            yield protractor_1.element(this.element).$('[value="' + valueToSelect + '"]').click();
        });
    }
    static selectIndexFromDropdown(elementName, pageName, indexToSelect) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            yield this.waitForElementPresent(this.element);
            yield this.waitForElementClickable(this.element);
            //await element(this.element).all(by.xpath('//option["' + indexToSelect + '"]')).click();
            yield protractor_1.element(this.element).all(protractor_1.by.cssContainingText('option', indexToSelect)).click();
        });
    }
    static selectTextFromDropdown(elementName, pageName, itemToSelect) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            yield this.waitForElementPresent(this.element);
            yield this.waitForElementClickable(this.element);
            yield protractor_1.element(this.element).all(protractor_1.by.xpath('.//option[contains(text(),"' + itemToSelect + '")]')).click();
        });
    }
    static getElementText(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            var elementText;
            this.getPageDescriptor(elementName, pageName);
            yield this.waitForElementVisible(this.element);
            yield this.waitForElementClickable(this.element);
            return yield protractor_1.element(this.element).getText().then(function (text) {
                return elementText = text;
            });
        });
    }
    static isElementDisplayed(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            var EC = protractor_1.protractor.ExpectedConditions;
            return yield protractor_1.browser.wait(EC.presenceOf(protractor_1.element(this.element)), 5000).then(function (result) {
                return result ? true : false;
            });
            // return await element(this.element).isDisplayed().then(function(result){
            //     return result ? true : false;
            // });
            // if(!element(this.element).isDisplayed())        
            // {
            //     assert.fail(""+elementName+" is not displayed"); 
            // }
        });
    }
    static isElementVisible(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            var EC = protractor_1.protractor.ExpectedConditions;
            return yield protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(this.element)), 5000).then(function (result) {
                return result ? true : false;
            });
        });
    }
    static isElementNotDisplayed(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            var EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.presenceOf(protractor_1.element(this.element)), 5000);
            if (protractor_1.element(this.element).isDisplayed()) {
                assert.fail("" + elementName + " is displayed");
            }
        });
    }
    static isElementNotVisible(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            var EC = protractor_1.protractor.ExpectedConditions;
            yield this.getPageDescriptor(elementName, pageName);
            yield protractor_1.browser.wait(EC.invisibilityOf(protractor_1.element(this.element)), 5000);
            return yield protractor_1.element(this.element).isPresent().then(function (result) {
                return result ? true : false;
            });
        });
    }
    static isElementEnabled(elementXpath) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(protractor_1.by.xpath(elementXpath)).isEnabled().then(function (result) {
                return result ? true : false;
            });
        });
    }
    static checkIfElementEnabled(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            var EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.presenceOf(protractor_1.element(this.element)), 5000);
            return yield protractor_1.element(this.element).isEnabled().then(function (result) {
                return result ? true : false;
            });
        });
    }
    static replaceAndCheckIfElementEnabled(elementName, pageName, replaceWithText) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            this.replacedXpath = this.element.replace("^", replaceWithText);
            //this.waitForElementVisible(by.xpath(this.replacedXpath));
            return yield protractor_1.element(protractor_1.by.xpath(this.replacedXpath)).isEnabled().then(function (result) {
                return result ? true : false;
            });
        });
    }
    static checkIfElementPresent(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            return yield protractor_1.element(this.element).isPresent().then(function (result) {
                return result ? true : false;
            });
        });
    }
    static checkIfElementDisplayed(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(elementName, pageName);
            return yield protractor_1.element(this.element).isDisplayed().then(function (result) {
                return result ? true : false;
            });
        });
    }
}
exports.Utility = Utility;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvdXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE4RDtBQUM5RCxtQ0FBZ0M7QUFDaEMsaUNBQWtDO0FBRWxDLE1BQWEsT0FBTztJQUtoQjtJQUVBLENBQUM7SUFFRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsV0FBbUIsRUFBRSxRQUFnQjtRQUMxRCxRQUFRLFFBQVEsRUFBRTtZQUNkLEtBQUssT0FBTztnQkFDUixNQUFNLEtBQUssR0FBVSxJQUFJLGFBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3ZDLE1BQU07WUFFVjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBTyxTQUFTLENBQUMsV0FBbUIsRUFBRSxRQUFnQixFQUFFLElBQVk7O1lBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN6QixJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO1lBQ3ZDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQWdCLFNBQVM7O29CQUNyRixJQUFJLFNBQVMsRUFBRTt3QkFDWCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzdCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENB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