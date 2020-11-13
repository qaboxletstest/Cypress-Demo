declare namespace Cypress {

    interface Chainable<Subject = any> {
        /**
         * Click a DOM element.
         *
         * @see https://on.cypress.io/click
         * @example
         *    cy.login('email', 'password').click()          // Click on button
         */
        login(email: string, password:string): Chainable<Subject>
    }

}