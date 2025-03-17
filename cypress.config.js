const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Ensure plugin exists and loads
      try {
        require('cypress-mochawesome-reporter/plugin')(on);
      } catch (error) {
        console.error("Error loading Mochawesome plugin:", error);
      }

      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });

      return config;
    },

    baseUrl: 'https://practicetestautomation.com',
    retries: 2,
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    numTestsKeptInMemory: 5,

    env: {
      loginUrl: '/practice-test-login/',
    },

    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "cypress/e2e/**/*.cy.js",

    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
