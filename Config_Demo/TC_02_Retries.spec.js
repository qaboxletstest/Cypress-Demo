describe("Retries", () => {
  Cypress.config({
    retries: {
      runMode: 2,
      openMode: 1,
    },
  });

  const retries = {
    runMode: 2,
    openMode: 4,
  };

  it("Retries - Suite Level", () => {
    expect(1).to.eql(2);
  });

  it.only("Retries - Test Level", { retries }, () => {
    expect(1).to.eql(2);
  });
});
