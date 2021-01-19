import login from "../../../Pages/PageClasses/loginPage.js";

describe.skip("Login Suite - Web Elements are hard-coded in test scripts", function () {
  it("Login Test", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act
    cy.fixture("logindetails.json").then((user) => {
      cy.get("input[type=email]").type(user.email);
      cy.get("input[type=password]").type(user.password);
    });

    cy.get("button[type=submit]").click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});

describe.skip("Login Suite - Web Elements are stored in Page Classes", function () {
  it("Login Test", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act
    cy.fixture("logindetails.json").then((user) => {
      login.Email.type(user.email);
      login.Password.type(user.password);
    });

    login.SubmitButton.click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});

describe.only("Login Suite - Web Elements are stored in JSON File", function () {
  it("Login Test", function () {
    const login = require("../../../Pages/PageJSONs/loginPage");
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act
    cy.fixture("logindetails.json").then((user) => {
      cy.get(login.Email).type(user.email);
      cy.get(login.Password).type(user.password);
    });

    cy.get(login.SubmitButton).click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});
