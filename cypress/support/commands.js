import "cypress-file-upload";
import "@4tw/cypress-drag-drop";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  console.log("login method");
});

// 1. Create pchannelName
Cypress.Commands.add("pchannelName", (name) => {
  cy.log(name);
});
//
//
// -- This is a child command --

// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })

// 2. Create cshannelName
Cypress.Commands.add("cschannelName", { prevSubject: true }, (prevSub) => {
  cy.log(prevSub);
});
// 3. Create cechannelName
Cypress.Commands.add("cechannelName", { prevSubject: "element" }, (prevSub) => {
  cy.log(prevSub.length);
});
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })

// 4. Create cdchannelName

Cypress.Commands.add(
  "cdchannelName",
  { prevSubject: "optional" },
  (prevSub) => {
    if (prevSub) {
      cy.log(prevSub.length);
    } else {
      cy.log("Welcome to Qa Box Let's Test");
    }
  }
);

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// 5. Get Text Value Command
Cypress.Commands.add("getText", { prevSubject: "element" }, (prevSub) => {
  // return prevSub.text();
  cy.wrap(prevSub.text());
});

// 6. Get Table Cell Value
Cypress.Commands.add("getCellValue", (row, col) => {
  cy.get(`table#table1>tbody>tr:nth-child(${row})>td:nth-child(${col})`).then(
    (el) => {
      cy.wrap(el.text());
    }
  );
});

// 7. Get the body of iFrame
Cypress.Commands.add("iframe", { prevSubject: "element" }, (iframe) => {
  return new Cypress.Promise((resolve) => {
    iframe.ready(() => {
      resolve(iframe.contents().find("body"));
    });
  });
});
