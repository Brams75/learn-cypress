describe("login", () => {
  it("should login an existing user", () => {
    cy.visit("http://127.0.0.1:5500/todo.html");
    cy.get("#myInput").focus();
  });
});
