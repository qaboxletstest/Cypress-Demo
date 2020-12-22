describe("File Upload Suite", () => {
  it.skip("Single File Upload - Light Dom", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
    cy.get("input#file-upload1").attachFile("dog.jpg");
    cy.get("span#fileName1").should("have.text", "dog.jpg");
  });

  it.skip("Single File Upload - Light Dom - Different Name", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
    cy.get("input#file-upload1").attachFile({
      filePath: "dog.jpg",
      fileName: "puppy.jpg",
    });
    cy.get("span#fileName1").should("have.text", "puppy.jpg");
  });

  it.skip("Single File Upload - Shadow Dom", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
    cy.get("button").click();
    cy.get("input#file-upload2", {
      includeShadowDom: true,
    }).attachFile("dog.jpg");
    cy.get("span#fileName2", { includeShadowDom: true }).should(
      "have.text",
      "dog.jpg"
    );
  });

  it.skip("File Upload - Drag Drop", () => {
    cy.visit("https://css-tricks.com/examples/DragAndDropFileUploading/");
    // cy.get("#file").attachFile("yey.jpg");
    cy.get("#file").attachFile("yey.jpg", { subjectType: "drag-n-drop" });
    // cy.get("div.box__success").should("contain.text", "Done!");
    cy.contains("Done!").should("be.visible");
  });

  it.skip("Multiple File Upload - Drag Drop", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
    cy.get("input#file-upload2")
      .attachFile("dog.jpg")
      .attachFile("example.json")
      .attachFile("yey.jpg");
  });

  it.oskipnly("Image File Upload - Drag Drop", () => {
    cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
    // cy.get("div#holder").attachFile("yey.jpg");
    cy.get("div#holder").attachFile("yey.jpg", { subjectType: "drag-n-drop" });
  });
});
