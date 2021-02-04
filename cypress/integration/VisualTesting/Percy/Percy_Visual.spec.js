// SET PERCY_TOKEN=

describe("Percy Visual Test Suite", () => {
  beforeEach(() => {
    cy.visit("/visualtesting.html");
    cy.viewport(1000, 980);
  });

  it.only("Percy Visual Test Case Document", () => {
    cy.document().percySnapshot();
  });

  it("Percy Visual Test Case Initial State", () => {
    cy.get("canvas").percySnapshot();
  });

  it("Percy Visual Test Case Red State", () => {
    cy.get("#red").click();
    cy.get("canvas").percySnapshot();
  });

  it("Percy Visual Test Case Green State", () => {
    cy.get("#green").click();
    cy.get("canvas").percySnapshot();
  });

  it("Percy Visual Test Case Blue State", () => {
    cy.get("#blue").click();
    cy.get("canvas").percySnapshot();
  });

  it("Percy Visual Test Case Reset State", () => {
    cy.get("#reset").click();
    cy.get("canvas").percySnapshot();
  });
});
