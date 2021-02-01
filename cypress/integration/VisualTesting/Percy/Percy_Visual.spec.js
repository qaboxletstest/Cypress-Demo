// SET PERCY_TOKEN=5f9f16dd187218d71ec701a65cb5647611eaba844cb11f14bee90319b4e20adb

describe("Percy Visual Test Suite", () => {
  beforeEach(() => {
    cy.visit("/visualtesting.html");
    cy.viewport(1000, 980);
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

  it("Percy Visual Test Case Document", () => {
    cy.document().percySnapshot();
  });
});
