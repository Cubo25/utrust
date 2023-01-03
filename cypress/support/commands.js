// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

const loginPage = require("../pages/loginPage");

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('uiLogin', (email, password) => { 
    cy.visit(Cypress.config('baseUrl'))
    loginPage.elements.emailInput().type(email);
    loginPage.elements.passwordInput().type(password);
    loginPage.clickOnSignin();
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })