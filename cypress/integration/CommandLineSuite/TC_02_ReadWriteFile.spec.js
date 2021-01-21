describe("Read-Write File", () => {
  it("Write to a file", () => {
    cy.writeFile("sample.txt", "HELLO WORLD\n");
    cy.writeFile("sample.txt", "QA BOX LET'S TEST", { flag: "a+" });
  });

  it("Read a file - String Exist", () => {
    cy.readFile("sample.txt").should("include", "HELLO WORLD");
  });

  it("Read a file - String Doesn't Exist", () => {
    cy.readFile("sample.txt").should("include", "MY WORLD");
  });
});
