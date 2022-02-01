import { buildUser } from "../support/generate";

// Création de compte en tant qu'utilisateur & Connexion
// describe("first login", () => {
//   it("should login an existing user", () => {
//     const user = buildUser();

//     cy.visit("/");
//     cy.findByText(/register/i).click();
//     cy.findByLabelText(/username/i).type(user.username);
//     cy.findByLabelText(/password/i).type(user.password);
//     cy.findByText(/submit/i).click();
//     cy.url().should("eq", `${Cypress.config().baseUrl}/`);
//     cy.window().its("localStorage.token").should("be.a", "string");
//     cy.findByText(/logout/i).click();

//     cy.findByText(/login/i).click();
//     cy.url().should("eq", `${Cypress.config().baseUrl}/login`);
//     cy.findByLabelText(/username/i).type(user.username);
//     cy.findByLabelText(/password/i).type(user.password);
//     cy.findByText(/submit/i).click();
//     cy.url().should("eq", `${Cypress.config().baseUrl}/`);
//     cy.window().its("localStorage.token").should("be.a", "string");
//     cy.get('[data-testid="username-display"]').should(
//       "have.text",
//       user.username
//     );
//   });
// });

// Création de compte avec la commande cy.request
// describe("second login", () => {
//   it("should login an existing user", () => {
//     const user = buildUser();

//     cy.request({
//       url: "http://localhost:3000/register",
//       method: "POST",
//       body: user,
//     });

//     cy.visit("/");
//     cy.findByText(/login/i).click();
//     cy.url().should("eq", `${Cypress.config().baseUrl}/login`);
//     cy.findByLabelText(/username/i).type(user.username);
//     cy.findByLabelText(/password/i).type(user.password);
//     cy.findByText(/submit/i).click();
//     cy.url().should("eq", `${Cypress.config().baseUrl}/`);
//     cy.window().its("localStorage.token").should("be.a", "string");
//     cy.get('[data-testid="username-display"]').should(
//       "have.text",
//       user.username
//     );
//   });
// });

// Création d'une commande perso
// describe("Third login", () => {
//   it("should login an existing user", () => {
//     cy.createUser().then((user) => {
//       cy.visit("/");
//       cy.findByText(/login/i).click();
//       cy.url().should("eq", `${Cypress.config().baseUrl}/login`);
//       cy.findByLabelText(/username/i).type(user.username);
//       cy.findByLabelText(/password/i).type(user.password);
//       cy.findByText(/submit/i).click();

//       cy.url().should("eq", `${Cypress.config().baseUrl}/`);
//       cy.window().its("localStorage.token").should("be.a", "string");
//       cy.get('[data-testid="username-display"]').should(
//         "have.text",
//         user.username
//       );
//     });
//   });
// });
