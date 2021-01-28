/// <reference types="@bahmutov/cy-api" />
describe("CRUD API", () => {
  let id;
  it("Create a member", () => {
    cy.api({
      url: "/api/members",
      method: "POST",
      auth: {
        username: "admin",
        password: "admin",
      },
      body: {
        name: "Paul Smith",
        gender: "Male",
      },
    }).then((res) => {
      id = res.body.id;
    });
  });

  it("Read a member " + id, () => {
    cy.request({
      url: "/api/members/" + id,
      method: "GET",
      auth: {
        username: "admin",
        password: "admin",
      },
    }).then((res) => {
      expect(res.body[0].id).to.eql(id);
    });
  });

  it("Update a member", () => {
    cy.api({
      url: "/api/members/" + id,
      method: "PUT",
      auth: {
        username: "admin",
        password: "admin",
      },
      body: {
        name: "July Swam",
        gender: "Female",
      },
    }).then((res) => {
      expect(res.body.msg).to.eql(
        `Member with id ${id} is updated successfully`
      );
      expect(res.body.member.name).to.eql("July Swam");
      expect(res.body.member.gender).to.eql("Female");
    });
  });

  it("Delete a member", () => {
    cy.api({
      url: "/api/members/" + id,
      method: "DELETE",
      auth: {
        username: "admin",
        password: "admin",
      },
    }).then((res) => {
      expect(res.body.msg).to.eql(
        `Member with id ${id} is deleted successfully`
      );
    });
  });
});
