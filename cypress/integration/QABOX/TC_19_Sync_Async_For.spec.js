describe("Mixing Sync & Async Code", () => {
  beforeEach(() => {
    cy.visit("/#/login?_k=ocipx1");
  });
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

  it.only("Example - Match an anchor text and click on it", () => {
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
