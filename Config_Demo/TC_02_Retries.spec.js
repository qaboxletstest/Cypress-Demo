describe("Retries", () => {
  Cypress.config({
    retries: {
      runMode: 2,
      openMode: 2,
    },
  });

  const retries = {
    runMode: 2,
    openMode: 6,
  };

  it("Retries - Suite Level", () => {
    expect(1).to.eql(2);
  });

  it.only("Retries - Test Level", { retries }, () => {
    expect(1).to.eql(2);
  });
});
