import { browser, Config, protractor } from "protractor";
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
export const config: Config = {
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
        "..//specs//test1.js"
    ],
    onPrepare: async function () {
        browser.ignoreSynchronization = false;
        browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        // await browser.get("https://www.google.com")
        
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'reports/'+Date.now(),
                screenshotsFolder: 'images'
            })
        );
    },
    onComplete: () => {

    },




};
