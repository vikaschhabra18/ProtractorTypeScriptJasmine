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
exports.Login = void 0;
const protractor_1 = require("protractor");
const assert = require("assert");
const utilities_1 = require("./utilities");
let util = utilities_1.Utility;
class Login {
    constructor(elementName) {
        switch (elementName) {
            case "GoogleSearch":
                this.elementIdentifier = protractor_1.by.name("q");
                break;
            case "FirstOption":
                this.elementIdentifier = protractor_1.by.xpath('(//*[@role="option"])[1]');
                break;
            default:
                this.elementIdentifier = null;
                assert.fail("No such element found");
        }
    }
    static pageSpecificFunction(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            let elmnt = util.getPageDescriptor(elementName, pageName);
            yield protractor_1.element(elmnt).sendkeys("ABC");
        });
    }
}
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsaUNBQWlDO0FBQ2pDLDJDQUFzQztBQUN0QyxJQUFJLElBQUksR0FBRyxtQkFBTyxDQUFBO0FBQ2xCLE1BQWEsS0FBSztJQUVkLFlBQVksV0FBVztRQUNuQixRQUFRLFdBQVcsRUFBRTtZQUNqQixLQUFLLGNBQWM7Z0JBQ2YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU07WUFDVixLQUFLLGFBQWE7Z0JBQ2QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDOUQsTUFBTTtZQUVWO2dCQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUU1QztJQUNMLENBQUM7SUFFRCxNQUFNLENBQU8sb0JBQW9CLENBQUMsV0FBVyxFQUFFLFFBQVE7O1lBQ25ELElBQUksS0FBSyxHQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QyxDQUFDO0tBQUE7Q0FDSjtBQXRCRCxzQkFzQkMifQ==