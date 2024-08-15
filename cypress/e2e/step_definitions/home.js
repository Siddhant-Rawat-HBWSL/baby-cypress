import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import home from "../../fixtures/home.json";
  
  Given("the user visits the home page", () => {
    cy.visit(Cypress.config("baseUrl"));
    cy.removePopups();
  });

  When("the user clicks on the 'Shop Now' button on the banner", () => {
    cy.contains('a', home.shopNow).click();
  });

  Then("the user should see the sonoline product", () => {
    cy.url().should('eq', home.sonolineUrl);
  });

  When("the user clicks on the 'Add to cart' on the products slider", () => {
    cy.contains(home.addToCart).first().click();
  });

  Then("the product should be added to the minicart", () => {
    cy.get(home.productLabelElem, {timeout: 6000})
      .invoke('text')
      .then((text) => {
        expect(text).to.contain(home.productLabel);
      });
  });
