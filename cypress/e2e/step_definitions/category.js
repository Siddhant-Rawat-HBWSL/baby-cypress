import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import category from "../../fixtures/category.json";
  
  Given("the user visits a category page", () => {
    cy.visit(Cypress.config("baseUrl") + category.fetalDopplerUrl);
    cy.removePopups();
  });
  
  When("the user selects a filter", () => {
    // cy.get('[value="price"]').click({force: true, timeout: 5000});
  });

  Then("the products should be arranged accordingly", () => {
    // maybe using url (but that is not a proper assertion)
    // cy.url().should('eq', category.priceFilterUrl);
  });

  When("the user selects a category from the sidebar", () => {
    cy.get(category.thermometer)
    .find(category.thermometerElem)
    .click();
  });

  Then("the products of that category should be shown", () => {
    cy.url().should('eq', category.thermometerUrl);
  });

  When("the user clicks on the product card's img", () => {
    cy.get(category.productCardImg).first().click();
  });

  Then("the user should see the product page of that particular page", () => {
    cy.url().should('eq', category.productPage);
  })

  When("the user clicks on the 'Add to Cart'", () => {
    cy.contains(category.addToCart).first().click();
  });

  Then("the product should be added to the cart", () => {
    cy.get(category.cartLabelElem, {timeout: 5000})
      .find(category.spanElem)
      .invoke('text')
      .then((text) => {
        expect(text).to.contain(category.cartLabel);
      });
  });
