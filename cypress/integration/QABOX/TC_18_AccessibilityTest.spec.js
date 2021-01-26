describe("Accessibility Test Suite", function () {
  before(function () {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/cygetcontains.html");
    cy.injectAxe();
  });

  it("Accessibility Test Case", function () {
    //   cy.checkA11y();
    // cy.checkA11y("button");
    // cy.checkA11y({ exclude: ["button"] });
    cy.checkA11y(null, {
      rules: {
        "landmark-one-main": { enabled: false },
      },
    });
  });

  it.only("Accessibility Test Case - Custom Command", function () {
    cy.customCheckAlly();
  });
});
