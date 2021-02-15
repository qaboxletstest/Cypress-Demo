import login from "../../../Pages/PageClasses/loginPage.js";

describe("Working with cy.task()", function() {
  it.only("Task without Params", () => {
    cy.task("noparam").then((txt) => {
      expect(txt).to.eq("OK");
    });
  });

  it.only("Task with single Param", () => {
    cy.task("singleParam", "Hello World").then((txt) => {
      expect(txt).to.eq("OK");
    });
  });

  it.only("Task with multiple Params", () => {
    cy.task("multipleParam", { name: "John", age: 35 }).then((txt) => {
      expect(txt).to.eq("OK");
    });
  });

  it.only("Login Test - Task - generateJSONFromExcel", function() {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    const excelFilePath =
      "C:\\Users\\Avi\\Documents\\GitHub\\Cypress-Demo\\cypress\\fixtures\\logindetails.xlsx";
    const sheetName = "login";
    //Act
    cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
      (user) => {
        login.Email.type(user[0].email);
        login.Password.type(user[0].password);
      }
    );

    login.SubmitButton.click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });

  it.only("API Test - Task - Sync DB Queries", () => {
    cy.request("http://localhost:3000/api/users").then((res) => {
      cy.task("getDBDataSync").then((resArr) => {
        expect(res.body.users.length).to.eq(resArr.length);
      });
    });
  });

  it.only("API Test - Task - Async DB Queries", () => {
    cy.request("http://localhost:3000/api/users").then((res) => {
      cy.task("getDBDataAsync").then((resArr) => {
        expect(res.body.users.length).to.eq(resArr.length);
      });
    });
  });
});
