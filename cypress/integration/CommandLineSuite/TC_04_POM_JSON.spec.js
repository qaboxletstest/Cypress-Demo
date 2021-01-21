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
