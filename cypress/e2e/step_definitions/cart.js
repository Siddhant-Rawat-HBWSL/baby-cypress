import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  Given("the user adds a product to the cart", () => {
    cy.visit("https://staging-babydoppler.humdash.com/sonoline-b-fetal-doppler-pink.html");
    cy.removePopups();
    // cy.get('amrelated-block-4').should("not.be.visible");
    cy.contains("span", "Add to Cart").click();
  });

  Then("the user should see the Frequently Bought Together products", () => {
    // cy.get('amrelated-block-4').should("be.visible");
  });

  Then("the user should see the added products with the correct quantity & price", () => {
    cy.get(".text-base.font-medium.text-neutral", {timeout: 10000})
      .find('span')
      .invoke('text')
      .then((text) => {
        expect(text).to.contain('The Official BabyDoppler® Sonoline B Fetal Doppler (Pink)');
      });
    cy.get('input[type="text"]')
      .invoke('val')
      .then((text) => {
      expect(text).to.contain('1');
    });
  });

  When("the user clicks on the delete icon", () => {
    cy.get('.inline-flex.bg-transparent', {timeout: 10000}).click({force: true});
  });

  Then("the product should be removed from the cart", () => {
    cy.get('.border.rounded-md.mt-2', {timeout: 10000}).should('not.be.visible');
    cy.get('.relative.py-6.bg-white.border-bs.border-container', {timeout: 10000}).contains('Cart is empty');
  });

  When("the user clicks on the minus icon", () => {
    cy.get('.w-8.h-8.bg-neutral-lighter400.text-neutral-800.flex.justify-center.items-center.rounded-l', {timeout: 10000}).click({force: true});
  });

  Then("the quantity of the product should be decreased by one", () => {
    cy.get('.border.rounded-md.mt-2', {timeout: 10000}).should('not.be.visible');
    cy.get('.relative.py-6.bg-white.border-bs.border-container', {timeout: 10000}).contains('Cart is empty');
  });

  When("the user clicks on the plus icon", () => {
    cy.get('.w-8.h-8.bg-neutral-lighter400.text-neutral-800.flex.justify-center.items-center.rounded-r', {timeout: 10000}).click({force: true});
    cy.wait(5000);
  });

  Then("the quantity of the product should be increased by one", () => {
    cy.get('input[type="text"]')
      .invoke('val')
      .then((text) => {
      expect(text).to.contain('2');
    });
  });

  When("the user applies a discount code", () => {
    cy.get("input[id='coupon_code']", {timeout: 10000}).type('THEBEST10', {force: true});
    cy.get('.btn.btn-secondary.rounded.w-full.flex.justify-center').click({force: true});
    cy.wait(5000);
  });

  Then("the price of the product should be decreased accordingly", () => {
    cy.get('#orderTotalwithCoupon').contains('USD $53.95');
  });
