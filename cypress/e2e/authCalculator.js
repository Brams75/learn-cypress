describe("authenticated calculator", () => {
  it("displays the username", () => {
    cy.loginAsNewUser().then((user) => {
      cy.visit("/");
      cy.findByTestId("username-display").should("have.text", user.username);
      cy.findByText(/logout/i).click();
      cy.findByTestId("username-display").should("not.exist");
    });
  });
});

// Fusionner la commande createrUser et login dans une nouvelle commande
// Remplacer ça dans le test

cy.createUser().then((user) => {
  cy.login(user);

  cy.visit("/");
  cy.findByTestId("username-display").should("have.text", `${user.userName}`);
  cy.findByText("Logout").click();
  cy.findByTestId("username-display").should("not.exist");
});
