describe.skip("Login Suite - Hard Coded Data", function () {
  it("Login Test", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act
    cy.get('input[type="email"]').type("qaboxletstest@gmail.com");
    cy.get('input[type="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});

describe.skip("Login Suite - Data from external fixture file", function () {
  it("Login Test", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act
    cy.fixture("logindetails.json").then((user) => {
      cy.get('input[type="email"]').type(user.email);
      cy.get('input[type="password"]').type(user.password);
    });

    cy.get('button[type="submit"]').click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});

describe.skip("Login Suite - Data from external fixture file - And BeforeEach", function () {
  let userDetails;
  beforeEach(() => {
    cy.fixture("logindetails.json").then((user) => {
      userDetails = user;
    });
  });
  it("Login Test", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act

    cy.get('input[type="email"]').type(userDetails.email);
    cy.get('input[type="password"]').type(userDetails.password);

    cy.get('button[type="submit"]').click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});

// In arrow functions there are no binding of this.
// In regular functions the this keyword represented the object that called the function.

describe.skip("Login Suite - Data from external fixture file - This And BeforeEach", function () {
  beforeEach(function () {
    cy.fixture("logindetails.json").then((user) => {
      this.userDetails = user;
    });
  });
  it("Login Test", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act

    cy.get('input[type="email"]').type(this.userDetails.email);
    cy.get('input[type="password"]').type(this.userDetails.password);

    cy.get('button[type="submit"]').click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});

describe.skip("Login Suite - Data from external fixture file - And Alias", function () {
  beforeEach(function () {
    cy.fixture("logindetails.json").as("userDetails");
  });
  it("Login Test", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act

    cy.get('input[type="email"]').type(this.userDetails.email);
    cy.get('input[type="password"]').type(this.userDetails.password);

    cy.get('button[type="submit"]').click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});

describe.only("Login Suite - Data from external fixture file - Multiple Data ", function () {
  const availablefixtures = [
    {
      name: "logindetails",
      context: "1",
    },
    {
      name: "logindetails2",
      context: "2",
    },
  ];
  availablefixtures.forEach((afixture) => {
    describe(afixture.context, () => {
      beforeEach(function () {
        cy.fixture(afixture.name).as("userDetails");
      });
      it("Login Test " + afixture.name, function () {
        //Arrange
        cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
        //Act

        cy.get('input[type="email"]').type(this.userDetails.email);
        cy.get('input[type="password"]').type(this.userDetails.password);

        cy.get('button[type="submit"]').click();
        //Assert
        cy.contains("No articles are here... yet.").should("be.visible");
      });
    });
  });
});
