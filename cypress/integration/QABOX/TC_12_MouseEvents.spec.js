describe("Mouse Events & Focus", () => {
  it.skip("Click", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/mouseevents.html");
    cy.on("window:alert", (txt) => {
      expect(txt).to.eql("click event is fired");
    });
    // cy.get("#click").click();
    cy.get("#click").trigger("click");
  });

  it.skip("Double Click", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/mouseevents.html");
    cy.on("window:alert", (txt) => {
      expect(txt).to.eql("dblclick event is fired");
    });
    cy.get("#dblclick").dblclick();
    // cy.get("#dblclick").trigger("dblclick");
  });

  it.skip("Right Click", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/mouseevents.html");
    cy.on("window:alert", (txt) => {
      expect(txt).to.eql("contextmenu event is fired");
    });
    // cy.get("#rightclick").rightclick();
    cy.get("#rightclick").trigger("contextmenu");
  });

  it.skip("Right Click Menu - jqueryUI Plugin - Options coming from Data", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/mouseevents.html");
    cy.on("window:alert", (txt) => {
      expect(txt).to.eql("contextmenu event is fired");
    });
    cy.get("#box2").rightclick();
    // cy.get('#box2').trigger('contextmenu')
    cy.contains("Two Oranges").should("be.visible");
  });

  it.skip("Mouseover and Mouseout", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/mouseevents.html");
    cy.on("window:alert", (txt) => {
      expect(txt).to.eql("show is clicked");
    });
    // cy.get("#msover").trigger("mouseover");
    // cy.get("#show").should("be.visible");
    // cy.get("#msover").trigger("mouseout");
    // cy.get("#show").should("not.be.visible");

    // cy.get("#show").click();
    // cy.get("#show").click({ force: true });
    cy.get("#show").invoke("show").click();
  });

  it.skip("Flipkart - mousemove Event", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("a:contains('Login')").trigger("mouseover");
    cy.get('a:contains("Rewards")').click();
  });

  it.skip("Spice Jet - mousemove Event", () => {
    cy.visit("https://www.spicejet.com/");
    cy.get("a#ctl00_HyperLinkLogin").trigger("mouseover");
    cy.get('a:contains("SpiceClub Members")').trigger("mouseover");
    cy.get('li>a:contains("Sign up")').click();
  });

  it.only("Automation Practice - Event to be triggered is Focus", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".sf-menu.clearfix.menu-content > li:nth-of-type(1)").trigger(
      "mousemove"
    );
    // cy.get(".submenu-container.clearfix.first-in-line-xs").invoke("show");
    cy.get(".sf-menu.clearfix.menu-content > li:nth-of-type(1)")
      .trigger("focus")
      .should("have.class", "sfHover");
    cy.get('a[title="Tops"]').click();
  });
});
