/// <reference types="Cypress" />

const loginPage = require("../pages/loginPage");
Cypress.Commands.add("uiLogin", () => {
  const username = Cypress.config("user_name");
  const password = Cypress.config("user_password");
  cy.visit(Cypress.config("baseUrl"));
  loginPage.elements.emailInput().type(username);
  loginPage.elements.passwordInput().type(password);
  loginPage.clickOnSignin();
});
