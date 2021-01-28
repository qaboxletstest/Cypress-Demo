/// <reference types="@bahmutov/cy-api" />
describe("POST SUITE", () => {
  it("POST A MEMBER", () => {
    cy.request({
      url: "/api/members",
      method: "POST",
      auth: {
        username: "admin",
        password: "admin",
      },
      body: {
        name: "Andy Ballard",
        gender: "Male",
      },
    })
      .its("status")
      .should("eql", 201);
  });
  it.skip("POST A MEMBER", () => {
    cy.request({
      url: "/api/members",
      method: "POST",
      auth: {
        username: "admin",
        password: "admin",
      },
      body: {
        name: "Avi Gulia",
        gender: "male",
      },
    })
      .its("status")
      .should("eql", 201);
  });

  it.only("POST A MEMBER - CY API", () => {
    cy.api({
      url: "/api/members",
      method: "POST",
      auth: {
        username: "admin",
        password: "admin",
      },
      body: {
        name: "Tanisha Gulia",
        gender: "Female",
      },
    }).then((res) => {
      expect(res.body).to.have.keys(["id", "name", "gender"]);
      expect(res.body.name).to.eql("Tanisha Gulia");
      expect(res.body.gender).to.eql("Female");
    });
  });
});
