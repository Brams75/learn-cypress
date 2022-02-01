import { buildUser } from "../support/generate";

describe("registration", () => {
  it("should register a new user", () => {
    const user = buildUser();
    // On visite le site
    cy.visit("/");

    // On se rend sur la page de création de compte
    cy.findByText(/register/i).click();
    // On vérifie que nous sommes sur la page register
    cy.url().should("include", "/register");

    // On vérifie que l'input dans lequel nous tapons le texte est vide
    cy.get("#username-input").should("have.text", "");
    // On le rempli avec type
    cy.findAllByLabelText(/username/i).type(user.username);
    // On vérifie que la valeur de l'input a été modifié
    cy.get("#username-input").should("have.value", `${user.username}`);

    cy.get("#password-input").should("have.text", "");
    cy.findAllByLabelText(/password/i).type(user.password);
    cy.get("#password-input").should("have.value", `${user.password}`);

    cy.findByText(/submit/i).click();

    // On vérifie que nous sommes bien redirigés vers la page d'accueil
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.window().its("localStorage.token").should("be.a", "string");
  });

  it("should show an error message if there's an error registering", () => {
    cy.intercept("POST", "/register", { statusCode: 500, body: {} });
    cy.visit("/register");
    cy.findByText(/submit/i).click();
    cy.findByText(/error.*try again/i);
  });
});
