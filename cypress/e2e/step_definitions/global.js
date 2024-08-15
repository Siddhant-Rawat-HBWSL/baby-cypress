import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";
  import global from '../../fixtures/global.json';

  Given("the user visits home page", () => {
    cy.visit(Cypress.config("baseUrl"));
    cy.removePopups();
  });

  When("the user clicks on the language dropdown at the top-right & selects a language", () => {
    cy.get(global.language).first().click();
    cy.get(global.spanish).first().click();
  });

  Then("the user should see the page for that specific language & the text should be changed to that specific language", () => {
    cy.url().should('eq', global.spanishUrl);
    cy.get(global.accountEle)
      .invoke('text')
      .then((text) => {
        expect(text).to.contain(global.homeSpanishTrans);
      });
  });

  When("the user hovers over the 'Shop' navbar tab & clicks on a category", () => {
    cy.contains(global.fetalDoppler).click({force: true});
  });

  Then("the user should be redirected to that category page", () => {
    cy.url().should('eq', global.fetalDopplerUrl);
  });

  When("the user clicks on the 'Download BabyDoppler App' button", () => {
    cy.get(global.downloadBtnEle).click();
  });

  Then("the user should be redirected to the download app page", () => {
    cy.url().should('eq', global.downloadAppUrl);
  });

  When("the user selects a country from the 'Select your Delivery Location' dropdown", () => {
    cy.contains('span', global.australia).click({force: true});
  });

  Then("the user should be redirected to that country's store view", () => {
    cy.url().should('eq', global.australiaUrl);
  });

  When("the user enters their details in the form", () => {
    cy.get(global.dobEle).type(global.dob);
    cy.get(global.emailEle).type(global.email);
  });

  Then("the user should be able to submit the form", () => {
    cy.get(global.submitBtn).click();
    cy.get(global.errorMsg).should('exist');
    // cy.get(global.successMsg).should('exist');
  });

  When("the user is not logged in & clicks on the Order Status link in the footer", () => {
    cy.contains('a', global.orderStatus).click();
  });

  Then("the user should be redirected to the login page", () => {
    cy.url().should('eq', global.loginUrl);
  });
