const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: 'http://localhost:8080', // Set your application's base URL
    retries: 2, // Retry failed tests up to 2 times
    video: true, // Enable video recording
    screenshotOnRunFailure: true, // Capture screenshots on test failure
    chromeWebSecurity: false, // Disable Chrome web security to prevent cross-origin issues
    defaultCommandTimeout: 10000, // Increase timeout for commands
    env: {
      loginUrl: '/login', // Example of setting environment variables
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "cypress/e2e/**/*.cy.js", // Set the test file pattern
  },
});
