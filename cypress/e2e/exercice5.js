// Supprimer Javascript, Python
// Vérifier que la todo Javascript et Python n'existent plus

describe("todo", () => {
  it("use todo", () => {
    cy.visit("http://127.0.0.1:5501/todo.html");
    cy.url().should("eq", "http://127.0.0.1:5501/todo.html");
    cy.get("h2").should("have.text", "My To Do List");

    cy.get("#myUL").then((element) => {
      for (let i = 0; i < 6; i++) {
        cy.get(element[0].children[i]).find(".close").click();
      }
    });

    const todos = [
      "Javascript",
      "Python",
      "Faire les courses",
      "Manger du chocolat",
    ];

    todos.forEach((todo) => {
      cy.get("#myInput").clear().type(todo);
      cy.get("#myInput").should("have.value", todo);
      cy.get(".addBtn").click();
    });

    cy.findByText("Javascript").click();
    cy.findByText("Javascript").should("have.class", "checked");
    cy.findByText("Javascript").click();
    cy.findByText("Javascript").should("not.have.class", "checked");

    cy.findByText("Manger du chocolat").click();
    cy.findByText("Manger du chocolat").should("have.class", "checked");
    cy.findByText("Manger du chocolat").click();
    cy.findByText("Manger du chocolat").should("not.have.class", "checked");

    cy.findByText("Javascript").find(".close").click();
    cy.findByText("Python").find(".close").click();

    // cy.contains("Javascript");
    // cy.contains("Python").should("not.exist");

    // cy.get(".checked > .close", { force: true }).click();
    // cy.get(".checked > .close", { force: true }).click();
    // cy.get(".checked > .close", { force: true }).click();
    // cy.get(".checked > .close", { force: true }).click();
    // cy.get(".checked > .close", { force: true }).click();
  });
});
