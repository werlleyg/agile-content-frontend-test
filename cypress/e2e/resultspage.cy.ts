describe("Search page form test", () => {
  it("Verifies results page behavior for different search scenarios", () => {
    // Get domain from NEXT_PUBLIC_DOMAIN
    const domain = Cypress.env("NEXT_PUBLIC_DOMAIN");

    // Visit search page
    cy.visit(`${domain}/results`);

    // Check if the form exists
    cy.get("form").should("exist");

    // [Case 1] Search that returns results
    // Check if the input exists
    cy.get('input[type="text"]').should("exist");
    // Clear input
    cy.get('input[type="text"]').clear().should("have.value", "");
    // Type "cat" in input
    cy.get('input[type="text"]').type("cat");
    // Submit form
    cy.get("form").submit();
    // Check if exists "cat" in page url
    cy.url().should("eq", `${domain}/results?search=cat`);
    // Check if had responses
    cy.get(".card")
      .should("have.length.gt", 0)
      .each(($card) => {
        // Check if there are exactly 2 "a" on each card
        cy.wrap($card).find("a").should("have.length", 2);
        // Check if there are exactly 1 "p" on each card
        cy.wrap($card).find("p").should("have.length", 1);
      });
    // Clear search
    cy.get('input[type="text"]').clear();

    // [Case 2] Search that returns no results
    // Type "anyTextWithoutResult" in input
    cy.get('input[type="text"]').type("anyTextWithoutResult");
    // Submit form
    cy.get("form").submit();
    // Check if exists "anyTextWithoutResult" in page url
    cy.url().should("eq", `${domain}/results?search=anyTextWithoutResult`);
    // Check if don't exists card
    cy.get(".card").should("have.length", 0);
    // Check if exists "p" with "No results found for"
    cy.get("p").contains("No results found for");
    // Clear search
    cy.get('input[type="text"]').clear();

    //[Case 3] Empty search with word suggestion
    cy.get('input[type="text"]').type("{enter}");
    // Check if the search in the url is empty
    cy.url().should("eq", `${domain}/results?search=`);
    // Check if don't exists card
    cy.get(".card").should("have.length", 0);
    // Check if exists "p" with "Try looking for"
    cy.get("p").contains("Try looking for");
    // Clear search
    cy.get('input[type="text"]').clear();
  });
});
