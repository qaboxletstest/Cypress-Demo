/// <reference types="@bahmutov/cy-api" />
describe("PUT SUITE", () => {
  it.only("PUT A MEMBER", () => {
    cy.request({
      url: "/api/members/4",
      method: "PUT",
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
      .should("eql", 200);
  });

  it.skip("PUT A MEMBER - CY API", () => {
    cy.api({
      url: "/api/members/5",
      method: "PUT",
      auth: {
        username: "admin",
        password: "admin",
      },
      body: {
        name: "Steven Smith",
        gender: "Male",
      },
    }).then((res) => {
      expect(res.body.msg).to.eql("Member with id 5 is updated successfully");
      expect(res.body.member).to.have.keys(["id", "name", "gender"]);
      expect(res.body.member.name).to.eql("Steven Smith");
      expect(res.body.member.gender).to.eql("Male");
    });
  });
});
