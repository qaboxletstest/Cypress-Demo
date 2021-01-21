describe("Login Suite - Valid Creds", function () {
  it("Login Test One", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act
    cy.get('input[type="email"]').type("qaboxletstest@gmail.com");
    cy.get('input[type="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });

  it("Login Test Two - Invalid Creds", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act
    cy.get('input[type="email"]').type("a.b@c.com");
    cy.get('input[type="password"]').type("123");
    cy.get('button[type="submit"]').click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});
