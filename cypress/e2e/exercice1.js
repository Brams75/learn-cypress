describe("exercice 1", () => {
  it("can go to home page", () => {
    cy.visit("http://testphp.vulnweb.com/index.php");
    cy.get('[href="index.php"]').click();
    cy.get("#pageName").should("have.text", "welcome to our page");
  });
});
