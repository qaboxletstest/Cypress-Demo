import login from "../../../Pages/PageClasses/loginPage.js";

describe("Login Suite - Web Elements are stored in Page Classes", function () {
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
