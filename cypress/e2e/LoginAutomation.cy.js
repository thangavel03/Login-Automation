describe('Login Page Automation', () => {
  
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    cy.wait(2000); // Ensure the page loads fully
  });

  it('should validate login functionality using external credentials', function () {
    cy.fixture('users.json').then((users) => {
      users.forEach(({ username, password, expectedUrl, errorMessage }) => {
        
        cy.log(`Testing login with: Username = "${username}", Password = "${password}"`);

        // Visit login page before each attempt to avoid session issues
        cy.visit('https://practicetestautomation.com/practice-test-login/');

        // Ensure the username field is present before interacting
        cy.get('input#username', { timeout: 10000 })
          .should('be.visible')
          .clear()
          .type(username);

        cy.get('input#password')
          .should('be.visible')
          .clear()
          .type(password);

        cy.get('button#submit').should('be.visible').click();

        if (errorMessage) {
          // Validate error message for invalid login
          cy.get('#error')
            .should('be.visible')
            .and('contain', errorMessage);
          cy.log(`Correct error message displayed: "${errorMessage}"`);
        } else {
          // Validate successful login by checking URL
          cy.url().should('include', expectedUrl);
          cy.contains('Logged In Successfully').should('be.visible');
          cy.log(`Successfully logged in and redirected to ${expectedUrl}`);
        }

        // Wait and return to login page before testing the next credential
        cy.wait(2000).then(() => {
          cy.visit('https://practicetestautomation.com/practice-test-login/');
          cy.wait(1000);
        });

      });
    });
  });

});
