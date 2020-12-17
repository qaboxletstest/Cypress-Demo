describe("XPath", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/cyxpath.html");
  });

  it("GET & WITHIN", () => {
    cy.get("fieldset#grouptwo input[name='Channel Name']").type(
      "QA BOX LETS TEST"
    );

    cy.get("fieldset#groupone").within(() => {
      cy.get("input[name='Channel Name']").type("LEARN CYPRESS");
    });
  });
  it.only("XPATH & WITHIN", () => {
    // cy.xpath('//fieldset[@id="grouptwo"]//input[@name="Channel Name"]').type(
    //   "QA BOX LETS TEST"
    // );
    // cy.xpath('//fieldset[@id="grouptwo"]').within(() => {
    //   cy.xpath(".//input[@name='Channel Name']").type("QA BOX LETS TEST");
    // });
    cy.xpath('//fieldset[@id="grouptwo"]')
      .xpath(".//input[@name='Channel Name']")
      .type("QA BOX LETS TEST 12345");
  });
});
