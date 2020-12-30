describe("XPath", () => {
  it.skip("Select with Text Value", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/differentDropDownTypes.html");
    // cy.get("#speed")
    //   .select("Fast")
    //   .should(($el) => {
    //     // JS
    //     // const el = $el[0];
    //     // expect(el.options[el.selectedIndex].value).to.eql("4");
    //     // expect(el.options[el.selectedIndex].text).to.eql("Fast");
    //     // Jquery
    //     expect($el.val()).to.eql("4");
    //     expect($el.find("option:selected").text()).to.eql("Fast");
    //   });
    cy.get("#speed").select("Fast").find("option:selected").as("speed");
    cy.get("@speed").invoke("text").should("eq", "Fast");
    cy.get("@speed").invoke("val").should("eq", "4");

    cy.get("#selectSpeed").should("have.text", "Fast");
    // Arrange , Act & Assert
    //1. JavaScript Way 2. jQuery way 3. Cypress Way
  });

  it.skip("Select with Option Value", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/differentDropDownTypes.html");
    cy.get("#files")
      .select("somefile")
      .should(($el) => {
        // expect($el.val()).to.eql('somefile');
        // expect($el.find('option:selected').text()).to.eql('Some unknown file');
        const el = $el[0];
        expect(el.options[el.selectedIndex].value).to.eql("somefile");
        expect(el.options[el.selectedIndex].text).to.eql("Some unknown file");
      });
    cy.get("#selectFiles").should("have.text", "Some unknown file");
  });

  it.skip('Autocompletion dropdown built using Input type="text" html element', () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/differentDropDownTypes.html");
    // What are the steps now for this type of drop down?
    cy.get("#myInput")
      .type("Indi{downarrow}{enter}")
      .blur()
      .should("have.value", "India");
    cy.get("#selectCountries").should("have.text", "India");
  });

  it.skip("Multi Select - Select html element", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/differentDropDownTypes.html");
    // cy.get("#cselect")
    //   .select(["USA", "India", "Angola"])
    //   .invoke("val")
    //   .should("deep.equal", ["USA", "India", "Angola"]);

    // How to do the same assertion on Text data?

    cy.get("#cselect")
      .select(["USA", "India", "Angola"])
      .find("option:selected")
      .invoke("text")
      .should("eq", ["USA", "India", "Angola"].join(""));
  });

  it.skip("Multi Select - Select html element - Chosen jQuery Plugin", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/differentDropDownTypes.html");
    // cy.get("#mSelect")
    //   .select(["United States", "Albania", "Angola"], { force: true })
    //   .invoke("val")
    //   .should("deep.equal", ["United States", "Albania", "Angola"]);

    cy.get('input[value="Choose a Country"]')
      .type("United States{enter}")
      .type("Albania{enter}")
      .type("Angola{enter}");
    cy.get("#mSelect")
      .invoke("val")
      .should("deep.equal", ["United States", "Albania", "Angola"]);
    // Delete Albania
    cy.get("li.search-choice span:contains('Albania')").next("a").click();
  });

  it.skip("testautomationpractice select drop down", () => {
    cy.visit("http://testautomationpractice.blogspot.com/");
    cy.get("select#files").select("PDF file");
  });

  it.skip("Google Auto Completion", () => {
    cy.visit("https://www.google.com/");
    cy.get('input[name="q"]').type("javascript");
    cy.get("li.sbct span")
      .contains("javascript compiler")
      .click({ force: true });
  });

  it.skip("phptravels.net Custom Drop Down", () => {
    cy.visit("https://phptravels.net/home");
    cy.get("div.dropdown-language").click();
    cy.get("a.dropdown-item").contains("Farsi").click();
  });

  it.only("automationpractice Auto Completion", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get("input#search_query_top").type("dress");
    cy.get("div.ac_results li").contains("Printed Chiffon").click();
  });
});
