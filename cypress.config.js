const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });

      return config;
    },

    baseUrl: 'https://practicetestautomation.com/practice-test-login/',
    retries: 2,
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    numTestsKeptInMemory: 5,

    env: {
      loginUrl: '/login',
    },

    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "cypress/e2e/**/*.cy.js",

    reporter: "cypress-mochawesome-reporter",
  },
});
