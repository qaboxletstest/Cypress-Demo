describe("Drag and Drop", () => {
  function dndNative(source, target, pixel) {
    const dataTransfer = new DataTransfer();
    function inner(obj) {
      cy.get(source).trigger("dragstart", { dataTransfer });
      cy.get(target).trigger("dragover", obj);
      cy.get(target).trigger("drop", { dataTransfer });
      cy.get(source).trigger("dragend");
    }
    if (pixel) {
      cy.get(target).then(($el) => {
        const x1 = $el[0].getBoundingClientRect().left;
        const x2 = $el[0].getBoundingClientRect().width;
        const xc = x1 + x2 / 2;
        const y1 = $el[0].getBoundingClientRect().top;
        const y2 = $el[0].getBoundingClientRect().height;
        const yc = y1 + y2 / 2;
        inner({
          clientX: xc,
          clientY: yc,
        });
      });
    } else {
      inner(null);
    }
  }

  function dndMouse(source, target) {
    cy.get(target).then(($el) => {
      const x1 = $el[0].getBoundingClientRect().left;
      const x2 = $el[0].getBoundingClientRect().width;
      const xc = x1 + x2 / 2;
      const y1 = $el[0].getBoundingClientRect().top;
      const y2 = $el[0].getBoundingClientRect().height;
      const yc = y1 + y2 / 2;
      cy.get(source)
        .trigger("mousedown")
        .trigger("mousemove", { clientX: xc, clientY: yc })
        .trigger("mouseup");
    });
  }
  it.skip("Drag n Drop - HTML Native Drag APIS - Drag Events", () => {
    // const dataTransfer = new DataTransfer();
    cy.visit("http://127.0.0.1:5500/Help%20Folder/dragndrop.html");
    // cy.get(".fill").drag("div.empty:nth-of-type(2)");
    // cy.get(".fill").trigger("dragstart", { dataTransfer });
    // cy.get("div.empty:nth-of-type(2)").trigger("drop", { dataTransfer });
    // cy.get(".fill").trigger("dragend");
    // dndNative(".fill", "div.empty:nth-of-type(2)", true);
  });

  it.skip("External Website seleniumeasy - Drag n Drop", () => {
    const dataTransfer = new DataTransfer();
    cy.visit("https://www.seleniumeasy.com/test/drag-and-drop-demo.html");
    // cy.get("#todrag>span:nth-child(2)").drag("#mydropzone");
    cy.get("#todrag>span:nth-child(2)").trigger("dragstart", { dataTransfer });
    cy.get("#mydropzone").trigger("drop", { dataTransfer });
    cy.get("#todrag>span:nth-child(2)").trigger("dragend");
    // dndNative("#todrag>span:nth-child(2)", "#mydropzone", true);
    cy.get("#droppedlist span").contains("Draggable 1").should("be.visible");
  });

  it.skip("Drag n Drop - HTML Mouse Events", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/dragndropMouseEvents.html");
    cy.on("window:alert", (text) => {
      expect(text).to.eql("Smaller circle is dropped inside bigger circle");
    });
    // cy.get("#divTwo").drag("#divOne");
    // cy.get("#divOne").then(($el) => {
    //   const x1 = $el[0].getBoundingClientRect().left;
    //   const x2 = $el[0].getBoundingClientRect().width;
    //   const xc = x1 + x2 / 2;
    //   const y1 = $el[0].getBoundingClientRect().top;
    //   const y2 = $el[0].getBoundingClientRect().height;
    //   const yc = y1 + y2 / 2;
    //   cy.get("#divTwo")
    //     .trigger("mousedown")
    //     .trigger("mousemove", { clientX: xc, clientY: yc })
    //     .trigger("mouseup");
    // });
    dndMouse("#divTwo", "#divOne");
  });

  it.skip("Mouse - Drag n Drop - Sort", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/dragndrop.html");
    cy.get("#divTwo").drag("#divFour");
    // Center approach won't generate desired result
    const dataTransfer = new DataTransfer();
    cy.get("#divTwo").trigger("dragstart", { dataTransfer });
    cy.get("#divFive").trigger("dragover");
    cy.get("#divFive").trigger("drop", { dataTransfer });
    cy.get("#divTwo").trigger("dragend");
    // dndNative("#divTwo", "#divFive", true);
  });

  it.skip("Angular App - Mouse Event", () => {
    cy.visit("https://angular-oxkc7l-zirwfs.stackblitz.io/");
    cy.contains("Run this project", { timeout: 10000 }).click();
    // cy.get("#cdk-drop-list-0 > :nth-child(1)").drag(
    //   "#cdk-drop-list-1 > :nth-child(4)"
    // );
    //https://stackoverflow.com/questions/55361499/how-to-implement-drag-and-drop-in-cypress-test/55436989
    cy.get("#cdk-drop-list-0 > :nth-child(1)").then((el) => {
      const draggable = el[0]; // Pick up this
      cy.get("#cdk-drop-list-1 > :nth-child(4)").then((el) => {
        const droppable = el[0]; // Drop over this
        const coords = droppable.getBoundingClientRect();
        draggable.dispatchEvent(new MouseEvent("mousemove"));
        draggable.dispatchEvent(new MouseEvent("mousedown"));
        draggable.dispatchEvent(
          new MouseEvent("mousemove", { clientX: 10, clientY: 0 })
        );
        draggable.dispatchEvent(
          new MouseEvent("mousemove", {
            clientX: coords.x + 10,
            clientY: coords.y + 10,
          })
        );
        draggable.dispatchEvent(new MouseEvent("mouseup"));
      });
      cy.get("#cdk-drop-list-1").should("contain", "Get to work");
      cy.get("#cdk-drop-list-1 > .cdk-drag")
        .eq(3)
        .should("contain", "Get to work");
    });
  });

  it.only("jQuery Drag n Drop", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/dragndrop.html");
    cy.on("window:alert", (text) => {
      expect(text).to.eql("I am dropped");
    });
    // cy.get("#drag").drag("#drop");
    cy.get("#drop").then((targetElms) => {
      const targetRect = targetElms[0].getBoundingClientRect();
      let targetCX = targetRect.left + targetRect.width / 2;
      let targetCY = targetRect.top + targetRect.height / 2;
      cy.get("#drag").then((sourceElms) => {
        const sourceRect = sourceElms[0].getBoundingClientRect();
        let sourceCX = sourceRect.left + sourceRect.width / 2;
        let sourceCY = sourceRect.top + sourceRect.height / 2;
        cy.get("#drag")
          .trigger("mousedown", { which: 1, pageX: sourceCX, pageY: sourceCY })
          .trigger("mousemove", { which: 1, pageX: targetCX, pageY: targetCY })
          .trigger("mouseup");
      });
    });
  });
});
