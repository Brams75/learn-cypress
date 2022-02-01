import { buildUser } from "../support/generate";

// Première étape :
// Créer le compte
// Se login comme un utilisateur
// Vérifier que notre pseudo s'affiche bien
// Se déconnecter et vérifier que notre pseudo ne s'affiche plus

// describe("First login", () => {
//   it("should login an existing user", () => {
//     cy.createUser().then((user) => {
//       cy.visit("/");
//       cy.findByText(/login/i).click();
//       cy.findByLabelText(/username/i).type(user.username);
//       cy.findByLabelText(/password/i).type(user.password);
//       cy.findByText(/submit/i).click();
//       cy.findByTestId("username-display").should("have.text", user.username);
//       cy.findByText(/logout/i).click();
//       cy.findByTestId("username-display").should("not.exist");
//     });
//   });
// });

// Deuxième étape :

// On va refaire la même mais en remplaçant le login avec une request

// describe("Second login", () => {
//   it("should login an existing user", () => {
//     cy.createUser().then((user) => {
//       cy.request({
//         url: "http://localhost:3000/login",
//         method: "POST",
//         body: user,
//       }).then((response) => {
//         window.localStorage.setItem("token", response.body.user.token);
//       });
//       cy.visit("/");
//       cy.findByTestId("username-display").should("have.text", user.username);
//       cy.findByText(/logout/i).click();
//       cy.findByTestId("username-display").should("not.exist");
//     });
//   });
// });

// Troisième étape :

// On va mettre le login avec request dans une commande

// describe("Second login", () => {
//   it("should login an existing user", () => {
//     cy.createUser().then((user) => {
//       cy.login(user);
//       cy.visit("/");
//       cy.findByTestId("username-display").should("have.text", user.username);
//       cy.findByText(/logout/i).click();
//       cy.findByTestId("username-display").should("not.exist");
//     });
//   });
// });
