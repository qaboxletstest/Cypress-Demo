/// <reference types="@bahmutov/cy-api" />
describe("GET SUITE", () => {
  it("GET ALL MEMBERS", () => {
    cy.request({
      url: "/api/members",
      method: "GET",
      auth: {
        username: "admin",
        password: "admin",
      },
    })
      .its("status")
      .should("eql", 200);
  });

  it.only("GET ONE MEMBER - PATH PARAM", () => {
    cy.api({
      url: "/api/members/1",
      method: "GET",
      auth: {
        username: "admin",
        password: "admin",
      },
    })
      .its("status")
      .should("eql", 200);
  });

  it.only("GET ALL MEMBERS - Query Param", () => {
    cy.api({
      url: "/api/members",
      method: "GET",
      qs: {
        gender: "male",
      },
      auth: {
        username: "admin",
        password: "admin",
      },
    }).then((res) => {
      res.body.forEach((member) => {
        expect(member.gender.toLowerCase()).to.be.eql("male");
      });
    });
  });

  it("GET ALL MEMBERS - CY API", () => {
    cy.api({
      url: "/api/members",
      auth: {
        username: "admin",
        password: "admin",
      },
    }).then((res) => {
      expect(res.body).to.have.length(3);
      expect(res.body[0]).to.have.keys(["id", "name", "gender"]);
    });
  });
});
