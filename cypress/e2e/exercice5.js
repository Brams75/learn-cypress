describe("todo", () => {
  it("use todo", () => {
    // Aller sur le site todo
    cy.visit("http://127.0.0.1:5501/todo.html");
    // Vérifier que l'url est bien /todo.html
    cy.url().should("eq", "http://127.0.0.1:5501/todo.html");
    // Vérifier que le titre est bien My To Do List
    cy.get("h2").should("have.text", "My To Do List");

    // Supprimer toutes les todos
    cy.get("#myUL").then((element) => {
      for (let i = 0; i < element[0].children.length; i++) {
        cy.get(element[0].children[i]).find(".close").click();
      }
    });

    const todos = [
      "Javascript",
      "Python",
      "Faire les courses",
      "Manger du chocolat",
    ];

    // Ajouter Javascript
    // Ajouter Python
    // Ajouter Faire les courses
    // Ajouter Manger du chocolat

    todos.forEach((todo) => {
      cy.get("#myInput").clear().type(todo);
      cy.get("#myInput").should("have.value", todo);
      cy.get(".addBtn").click();
    });

    // Cliquer sur Javascript
    cy.findByText("Javascript").click();
    cy.findByText("Javascript").should("have.class", "checked");
    cy.findByText("Javascript").click();
    cy.findByText("Javascript").should("not.have.class", "checked");

    // Cliquer sur Manger du chocolat
    cy.findByText("Manger du chocolat").click();
    cy.findByText("Manger du chocolat").should("have.class", "checked");
    cy.findByText("Manger du chocolat").click();
    cy.findByText("Manger du chocolat").should("not.have.class", "checked");

    cy.findByText("Javascript").find(".close").click();
    cy.findByText("Python").find(".close").click();

    cy.contains("Javascript").should("not.be.visible");
    cy.findByText("Python").should("not.be.visible");
  });
});
