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
exports.config = void 0;
const protractor_1 = require("protractor");
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    // seleniumAddress: "http://localhost:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    directConnect: true,
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            // binary: "C://Program Files (x86)//Google//Chrome//Application//chrome.exe",
            useAutomationExtension: false
        },
        metadata: {
            device: 'Local test machine',
            platform: {
                name: 'Windows',
                version: '10'
            }
        }
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    specs: [
        "..//specs//*.js"
    ],
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.ignoreSynchronization = false;
            protractor_1.browser.manage().window().maximize();
            yield protractor_1.browser.waitForAngularEnabled(false);
            // await browser.get("https://www.google.com")
            jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                savePath: 'reports/' + Date.now(),
                screenshotsFolder: 'images'
            }));
        });
    },
    onComplete: () => {
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUQ7QUFDekQsSUFBSSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUMzRCxRQUFBLE1BQU0sR0FBVztJQUMxQixtREFBbUQ7SUFFbkQsd0JBQXdCLEVBQUUsS0FBSztJQUMvQixhQUFhLEVBQUUsSUFBSTtJQUNuQixZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUUsUUFBUTtRQUNyQixhQUFhLEVBQUU7WUFDWCw4RUFBOEU7WUFDOUUsc0JBQXNCLEVBQUUsS0FBSztTQUNoQztRQUVELFFBQVEsRUFBRTtZQUNOLE1BQU0sRUFBRSxvQkFBb0I7WUFDNUIsUUFBUSxFQUFFO2dCQUNOLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1NBQ0o7S0FDSjtJQUVELFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGVBQWUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLHNCQUFzQixFQUFFLEtBQUs7S0FDaEM7SUFDRCxLQUFLLEVBQUU7UUFDSCxpQkFBaUI7S0FDcEI7SUFDRCxTQUFTLEVBQUU7O1lBQ1Asb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7WUFDdEMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsOENBQThDO1lBRTlDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQ3hCLElBQUksb0JBQW9CLENBQUM7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVLEdBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDL0IsaUJBQWlCLEVBQUUsUUFBUTthQUM5QixDQUFDLENBQ0wsQ0FBQztRQUNOLENBQUM7S0FBQTtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7SUFFakIsQ0FBQztDQUtKLENBQUMifQ==