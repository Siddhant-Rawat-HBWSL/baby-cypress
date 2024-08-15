  import {
      Given,
      When,
      Then,
    } from "@badeball/cypress-cucumber-preprocessor"

  Given("the user is on the home page", () => {
    cy.visit(Cypress.config("baseUrl"));
    cy.removePopups();
  });

  When('The user searches for a product via the search bar', () => {
    cy.get('#search').clear().type('sonoline');
    cy.wait(10000);
    cy.get('#search_mini_form')
    .find('button')
    .click({force: true});
  });

  Then('they should be able to see the products relevant to the search query', () => {
    cy.url().should('eq', "https://staging-babydoppler.humdash.com/catalogsearch/result/?q=sonoline");
    cy.get('.page-title', {timeout: 10000})
    .find('span')
    .invoke('text')
    .then((text) => {
      expect(text).to.contain("Search results for: 'sonoline'");
    });
  });
