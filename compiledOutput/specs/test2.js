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
const protractor_1 = require("protractor");
const utilities_1 = require("../pages/utilities");
const util = utilities_1.Utility;
describe('Protractor Demo App', function () {
    return __awaiter(this, void 0, void 0, function* () {
        it('should have a title', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.get('https://www.google.com/');
                console.log("Test 2");
                yield util.enterText("GoogleSearch", "Login", "Automation Testing");
                yield protractor_1.browser.sleep(2000);
                yield util.clickOnItem("FirstOption", "Login");
                let title = yield protractor_1.browser.getTitle();
                expect(title).toContain("automation testing");
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy90ZXN0Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLDJDQUF5RDtBQUN6RCxrREFBNkM7QUFDN0MsTUFBTSxJQUFJLEdBQUcsbUJBQU8sQ0FBQztBQUNyQixRQUFRLENBQUMscUJBQXFCLEVBQUU7O1FBQzVCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQ3RCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDckIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztnQkFDcEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDekIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQTtnQkFDOUMsSUFBSSxLQUFLLEdBQUcsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEQsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==