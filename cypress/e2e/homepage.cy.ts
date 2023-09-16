describe("Homepage Form Test", () => {
  it("Visits the test page and submits the form", () => {
    // Get domain from NEXT_PUBLIC_DOMAIN
    const domain = Cypress.env("NEXT_PUBLIC_DOMAIN");
    // Visit homepage
    cy.visit(domain);
    // Check if the form exists
    cy.get("form").should("exist");
    // Check if the input text exists
    cy.get('input[type="text"]').should("exist");
    // Type "dof" in the input field
    cy.get('input[type="text"]').type("dog");
    // Submit form
    cy.get("form").submit();
    // Check if results page loads correctly
    cy.url().should("eq", `${domain}/results?search=dog`);
    //Clear input
    cy.get('input[type="text"]').clear();
  });
});
