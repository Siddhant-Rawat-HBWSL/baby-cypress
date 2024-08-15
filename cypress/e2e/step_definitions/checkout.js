  import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  Given("The user is on the checkout page", () => {
    cy.visit("https://dev-babydoppler.humdash.com/sonoline-b-fetal-doppler-pink.html");
    cy.removePopups();
    cy.contains("span", "Add to Cart").click({force: true});
    cy.get('.inline-flex.btn.btn-primary.w-full.flex.justify-center', {timeout: 6000}).click({force: true});
  });

  When("the user places an order", () => {
    cy.get('#customer-email', {timeout: 6000}).clear().type('siddhant.rawat@hbwsl.com');
    cy.get('[name="firstname"]', {timeout: 6000}).eq(1).clear().type('Siddhant');
    cy.get('[name="lastname"]').eq(1).clear().type('Test');
    cy.get('[name="street[0]"]').clear().type('360 Otis Forges');
    cy.get('[name="city"]').eq(1).clear().type('Dietrichtown');
    cy.get('[name="region_id"]').select('Missouri')
    cy.get('[name="postcode"]').clear().type('87816-2247');

    cy.get('#s_method_freeshipping_freeshipping').click();
    cy.get('#billing-address-same-as-shipping-stripe_payments').click();

    cy.get('#Field-numberInput').clear().type("4242424242424242");
    cy.get('#Field-expiryInput').clear().type('05/27');
    cy.get('#Field-cvcInput').clear().type('123');

    cy.get('.action.primary.checkout.amasty', {timeout: 10000}).click();
  });

  Then("they should see the order confirmation page", () => {
    cy.url().should('eq', "https://dev-babydoppler.humdash.com/checkout/success");
  });
