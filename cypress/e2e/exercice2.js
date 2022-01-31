describe("registration", () => {
  it("should register a new user", () => {
    cy.visit("http://testphp.vulnweb.com/index.php");

    cy.get("#sectionLinks > ul > :nth-child(4) > a").click();
    cy.contains(
      "If you are already registered please enter your login information below:"
    );
    cy.get("h3 > a").click();
    cy.get("#pageName").should("have.text", "Signup new user");

    cy.get(":nth-child(1) > :nth-child(2) > input").should("have.text", "");
    cy.get(":nth-child(1) > :nth-child(2) > input").type("username");
    cy.get(":nth-child(1) > :nth-child(2) > input").should(
      "have.value",
      `username`
    );

    cy.get(":nth-child(2) > :nth-child(2) > input").type("password");
    cy.get(":nth-child(3) > :nth-child(2) > input").type("password");
    cy.get(":nth-child(4) > :nth-child(2) > input").type("name");
    cy.get(":nth-child(5) > :nth-child(2) > input").type("credit card number");
    cy.get(":nth-child(6) > :nth-child(2) > input").type("email");
    cy.get(":nth-child(7) > :nth-child(2) > input").type("phone number");
    cy.get("textarea").type("address");
    cy.get(":nth-child(9) > td > input").click();

    cy.url().should("eq", `http://testphp.vulnweb.com/secured/newuser.php`);
    cy.findByText(
      "You have been introduced to our database with the above informations:"
    );
  });
});
