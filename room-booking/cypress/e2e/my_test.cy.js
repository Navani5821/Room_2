// cypress/e2e/example.cy.js
describe("Example Test", () => {
    it("Visits the app", () => {
      cy.visit("http://localhost:3000"); // Replace with your app's URL
      cy.contains("luxurious").should("exist"); // Replace with a relevant test
    });
  });