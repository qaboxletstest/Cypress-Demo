describe("Visual Test Suite", () => {
  beforeEach(() => {
    cy.visit("/visualtesting.html");
    cy.viewport(1000, 980);
  });

  it("Visual Test Case Document", () => {
    cy.document().toMatchImageSnapshot();
  });

  it("Visual Test Case Initial State", () => {
    cy.get("canvas").toMatchImageSnapshot();
  });

  it("Visual Test Case Red State", () => {
    cy.get("#red").click();
    cy.get("canvas").toMatchImageSnapshot();
  });

  it("Visual Test Case Green State", () => {
    cy.get("#green").click();
    cy.get("canvas").toMatchImageSnapshot();
  });

  it("Visual Test Case Blue State", () => {
    cy.get("#blue").click();
    cy.get("canvas").toMatchImageSnapshot();
  });

  it("Visual Test Case Reset State", () => {
    cy.get("#reset").click();
    cy.get("canvas").toMatchImageSnapshot();
  });
});
