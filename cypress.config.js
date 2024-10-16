const { defineConfig } = require("cypress");
const baseUrl = process.env.CYPRESS_baseUrl || '//localhost:3000';

module.exports = defineConfig({
  defaultCommandTimeout: 10000,//timeout untuk menunggu command dieksekusi
  pageLoadTimeout: 60000,//timeout untuk menunggu halaman selesai dimuat
  requestTimeout: 5000,//timeout untuk menunggu request selesai
  responseTimeout:30000,//timeout untuk menunggu respons dari server

  e2e: {
    // baseUrl: 'https://dev.satuinbox.com',//dev
    // baseUrl: 'https://sap.satuinbox.com',//prod (sap)
    baseUrl: baseUrl,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  "reporter":"cypress-mochawesome-reporter",
    "reporterOptions" :{
      "quite": true,
      "overwrite": false,
      "html": false,
      "attachments": true,
      "embeddedScreenshot": true,
      "inlineAssets": true
    },
    "screenshotsFolder" :"C:/Users/MyBook SAGA 12/Desktop/automation/cypress/screenshots",
    // 'chromeWebSecurity': false
});
