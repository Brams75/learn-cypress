import { buildUser } from "../support/generate";

describe("login", () => {
  it("should login an existing user", () => {
    // On peut override l'utilisateur en mettant un objet dans ses paramètres
    // cy.createUser({ username: "Abram" });

    cy.createUser().then((user) => {
      // On se connecte
      cy.visit("/");
      cy.findByText(/login/i).click();
      cy.assertPage("login");
      cy.findByLabelText(/username/i).type(user.username);
      cy.findByLabelText(/password/i).type(user.password);
      cy.findByText(/submit/i).click();
      cy.assertHome();
      cy.assertLoggedInAs(user);
    });
  });
});
