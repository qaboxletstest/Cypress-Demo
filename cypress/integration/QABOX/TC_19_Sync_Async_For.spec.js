describe("Mixing Sync & Async Code", () => {
  // beforeEach(() => {
  //   cy.visit("/#/login?_k=ocipx1");
  // });
  it.skip("Concept", () => {
    console.log("First Log");
    cy.get('input[type="email"]').type("qaboxletstest@gmail.com");
    console.log("Second Log");
    cy.get('input[type="password"]').type("TEST");
    console.log("Third Log");
    cy.get('button[type="submit"]').click();
    console.log("Fourth Log");
  });

  it.skip("Example - Fetch Text of all the Anchor Texts", () => {
    // Create a collection variable to store all the anchor tags
    let arr = [];
    // Find all the anchor tags and store their text in the collection variable created above
    // cy.get("a")
    //   .each((el) => {
    //     arr.push(el.text());
    //   })
    //   .as("myarr");
    // cy.get("@myarr").then(() => {
    //   console.log(`Anchor Tag Count - ${arr.length}`);
    //   console.log(`Anchor Tags Text String  - ${arr.join(", ")}`);
    // });

    // Print the count of anchor tags and join the array
    cy.get("a")
      .then((els) => {
        for (let index = 0; index < els.length; index++) {
          arr.push(Cypress.$(els[index]).text());
        }
        return arr;
      })
      .then((myarr) => {
        console.log(`Anchor Tag Count - ${myarr.length}`);
        console.log(`Anchor Tags Text String  - ${myarr.join(", ")}`);
      });
  });
});

describe("Loop Usage and Break Loop", () => {
  it.skip("Basics - For Loop - Break Loop", () => {
    let array = [...Array(10).keys()];
    for (let index = 0; index < array.length; index++) {
      if (array[index] === 5) {
        break;
      }
      console.log(array[index]);
    }
  });

  it.skip("Example - Match an anchor text and click on it", () => {
    cy.visit("/#/login?_k=ocipx1");
    let arr = [];
    cy.get("a")
      .each((el) => {
        arr.push(el.text());
      })
      .then(() => {
        for (let index = 0; index < arr.length; index++) {
          if (arr[index] === "Sign up") {
            cy.get(`a:contains(${arr[index]})`).click();
            break;
          }
        }
      });
  });
});

describe("Recursion and Pagination", () => {
  it.skip("Recursion", () => {
    function test(index) {
      // Self Invoke - Recursion
      // console.log(index);
      // test(++index);
      if (index >= 10) {
        return false;
      } else {
        console.log(index);
        test(++index);
      }
    }
    test(0);
  });

  it.only("Pagination", () => {
    cy.visit(
      "https://examples.bootstrap-table.com/template.html?v=134&url=options/table-pagination.html"
    );
    findItem("Item 2");
  });

  // Steps
  // 1. Build Mechanism to Iterate through Pages - Note - Page elements are refreshed
  // 2. Build Logic to Iterate through the table
  // 3. Once matching record is found, build logic to break all the loops

  function findItem(value) {
    function findInPage(index) {
      let found = false;
      cy.get("li.page-item:not(.page-pre):not(.page-next)").as("pages");
      cy.get("@pages")
        .its("length")
        .then((len) => {
          if (index >= len) {
            return false;
          } else {
            cy.get("@pages")
              .eq(index)
              .click();
            cy.get("table#table tr > td:nth-child(2)")
              .each((itemNameEl) => {
                const itemText = itemNameEl.text();
                console.log(itemText);
                if (itemText === value) {
                  found = true;
                  return false;
                }
              })
              .then(() => {
                if (!found) {
                  findInPage(++index);
                }
              });
          }
        });

      // cy.get("@pages")
      //   .its("length")
      //   .then((len) => [...Array(len).keys()])
      //   .each((index) => {
      //     cy.get("@pages")
      //       .eq(index)
      //       .click();
      //     cy.get("table#table tr > td:nth-child(2)").each((itemNameEl) => {
      //       const itemText = itemNameEl.text();
      //       console.log(itemText);
      //       if (itemText === value) {
      //         return false;
      //       }
      //     });
      //   });
    }
    findInPage(0);
  }

  // function findItem(value) {
  //   function findInPage(index) {
  //     let found = false;
  //     cy.get("li.page-item:not(.page-pre):not(.page-next)").as("pages");
  //     cy.get("@pages")
  //       .its("length")
  //       .then((len) => {
  //         if (index >= len) {
  //           return false;
  //         } else {
  //           cy.get("@pages")
  //             .eq(index)
  //             .click();
  //           cy.get("table#table tr>td:nth-child(2)")
  //             .each((itemNameEl) => {
  //               console.log(itemNameEl.text());
  //               if (itemNameEl.text() === value) {
  //                 found = true;
  //                 return false;
  //               }
  //             })
  //             .then(() => {
  //               if (!found) {
  //                 findInPage(++index);
  //               }
  //             });
  //         }
  //       });
  //   }
  //   findInPage(0);
  // }
});
