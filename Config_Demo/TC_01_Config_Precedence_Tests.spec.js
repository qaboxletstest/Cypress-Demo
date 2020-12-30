// { baseUrl: "https://www.google.com" },

describe("Login Suite - Config Tests", function () {
  // Cypress.config("baseUrl", "https://www.bing.com/");

  //{ baseUrl: "https://react-redux.realworld.io/#/register?_k=lpc9qj" },
  it("Login Test", function () {
    cy.visit("/");
  });
});
