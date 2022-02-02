describe("anonymous calculator", () => {
  it("can make calculations", () => {
    cy.visit("/");
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);

    cy.findByText(/^1$/).as("myElement");
    cy.get("@myElement").click();
    cy.findByTestId("total").should("have.text", "2");

    cy.findByText(/^\+/).click();
    cy.findByText(/^2$/).click();
    cy.findByTestId("total").should("have.text", "2");

    cy.findByText(/^=$/).click();
    cy.findByTestId("total").should("have.text", "3");
  });
});

// .blur()
// .focus()
// .check()
// .uncheck()
// .select()
// .dbclick()
// .rightclick()

// L'élément est caché derrière un autre, couvert, disabled, animating

// Assertion
// cy.get(":checkbox").should("be.disabled");
// cy.get("form").should("have.class", "form-horizontal");
// cy.get("input").should("not.have.value", "US");

// Certaines commandes n'ont pas besoin d'un sujet
// cy.clearCookie();
// cy.contains("2");

// On peut utiliser un .then() pour faire beaucoup de chose notemment récupérer l'élément précédent.
// cy.contains("1").then((element) => {
//   console.log(element.prop("autofocus"));
// });

// Commands are asynchronous

// When to assert ?

// cy.get("#wrapper").find("#app");
// cy.wrap({ width: "100" }).its("width");

// Le timeout se répercute sur les les éléments chaîner au sujet.
