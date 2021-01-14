describe("Custom Commands in Cypress", () => {
  it.skip("Parent Custom Command", () => {
    cy.pchannelName("QA BOX LET'S TEST - PARENT CMD");
  });

  it.skip("Child Custom Command - Option = String", () => {
    cy.wrap("QA BOX LET'S TEST - CHILD CMD").cschannelName();
  });

  it.skip("Child Custom Command - Option = Element", () => {
    cy.visit("https://www.google.com");
    cy.get("input").cechannelName();
  });

  it.skip("Dual Custom Command", () => {
    cy.visit("https://www.google.com");
    cy.get("input").cdchannelName();
    cy.cdchannelName();
  });

  it.skip("Get Text Custom Command", () => {
    cy.visit("https://www.google.com");
    cy.get("span.Q8LRLc").getText().then(cy.log);
  });

  it.skip("Get Table Cell Value Custom Command", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.getCellValue(3, 5).then(cy.log);
  });

  it.only("Frame Custom Command", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.get("iframe#mce_0_ifr")
      .iframe()
      .clear()
      .type("QA BOX LET'S TEST - CHILD CMD");
  });
});
