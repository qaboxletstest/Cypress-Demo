// trigger('event-name')

// invoke('jQuery Method')...

// invoke('attr', 'attribute name') - get the value of an attribute
// invoke('attr', 'attribute name', 'new value for the attribute') - set the value of an attribute

describe("Slider suit", () => {
  it.skip("Slider Test - input type=range", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/slider.html");
    cy.get("#rangeone").invoke("val", "72").trigger("change");
    cy.get("p#one").should("have.text", 70);
    cy.get("#rangetwo").invoke("val", "76").trigger("change");
    cy.get("p#two").should("have.text", 80);
  });

  it.skip("Slider Test - Built from CSS", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/styledslider.html#slide-5");
    cy.get("div#slide-2").click({ force: true });
    cy.get("div#slide-3").click({ force: true });
    cy.get('a[href="#slide-1"]').click();
    cy.url().should("include", "#slide-1");
  });

  it.skip("Slider Test - http://testautomationpractice.blogspot.com/", () => {
    cy.visit("http://testautomationpractice.blogspot.com/");
    cy.get("div#slider span").invoke("attr", "style", "left: 80%;");
  });

  it.skip("Slider Test - MaterialUi", () => {
    cy.visit("https://material-ui.com/components/slider/");
    cy.get(
      "div.jss61 div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-true>span>span"
    )
      .last()
      .invoke("attr", "style", "left: 80%;")
      .invoke("attr", "aria-valuenow", "80");
    cy.get(
      "div.jss61 div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-true>span>span"
    )
      .eq(1)
      .invoke("attr", "style", "left: 0%; width: 80%;");
    cy.get(
      "div.jss61 div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-true>span>input"
    )
      .invoke("attr", "value", "80")
      .should("have.value", "80");
  });

  it.only("Amazon Slider", () => {
    cy.visit("https://www.amazon.in/");
    cy.get(
      ".a-section.a-spacing-none.shogun-widget.card-lite.image-shoveler.aui-desktop.fresh-shoveler.image-shoveler>div.a-section.a-spacing-none.feed-carousel>span .feed-scrollbar-thumb",
      { timeout: 10000 }
    ).invoke(
      "attr",
      "style",
      "left: 211px; width: 311.176px; display: inline;"
    );
  });
});
