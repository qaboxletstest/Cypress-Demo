describe("Login Suite - ENV OR JSON File", function () {
  it("Login Test", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    const login = require("../../../Pages/PageJSONs/loginPage");

    //Act
    if (Cypress.env("email") && Cypress.env("password")) {
      let user = {
        email: Cypress.env("email"),
        password: Cypress.env("password"),
      };
      cy.get(login.Email).type(user.email);
      cy.get(login.Password).type(user.password);
    } else {
      cy.fixture("logindetails2.json").then((user) => {
        cy.get(login.Email).type(user.email);
        cy.get(login.Password).type(user.password);
      });
    }

    cy.get(login.SubmitButton).click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});
