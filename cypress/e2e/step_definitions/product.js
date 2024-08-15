import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import product from "../../fixtures/product.json";
  
  Given("the user visits a product page", () => {
    cy.visit(Cypress.config("baseUrl") + product.productUrl);
    cy.removePopups();
  });

  When("the user increases the product count & adds the product to cart", () => {
    cy.contains("button", "+").click();
    cy.contains("button", "+").click();
    cy.get('#product-addtocart-button').click();
  });

  Then("the product should be added to the minicart with that quantity", () => {
    cy.get(".text-base.font-medium.text-neutral", {timeout: 5000})
      .find('span', {timeout: 6000})
      .invoke('text')
      .then((text) => {
        expect(text).to.contain('The Official BabyDoppler® Sonoline B Fetal Doppler (Teal)');
      });
    cy.get('input[type="text"]')
      .invoke('val')
      .then((text) => {
        expect(text).to.contain('2');
      });
  });
