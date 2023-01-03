/// <reference types="Cypress" />

const invoiceDetailsPage = require("../pages/invoiceDetailsPage");
const mainPage = require("../pages/mainPage");
const newInvoicePage = require("../pages/newInvoicePage");
const widgetAppPage = require("../pages/widgetAppPage");

describe('Utrust invoice', () => {
  it('Send invoice via email', () => {
    // login via the UI with custom cypress command
    cy.uiLogin('j.vitek25@gmail.com','Bjy3!9tSCCgzVa!');
    // navigate to the new invoice form
    mainPage.elements.paymentsSidebar().click();
    mainPage.elements.paymentsTabs().contains('Invoices').click();
    mainPage.elements.newInvoiceBtn().click();
    // fill the invoice form
    newInvoicePage.elements.customerNameInput().type('Test');
    newInvoicePage.elements.sendIssuedEmailCheckbox().should('be.checked');
    newInvoicePage.elements.customerEmailInput().type('j.vitek25@gmail.com');
    newInvoicePage.elements.billingAddressInput().type('Zuzany Chalupovej 15');
    newInvoicePage.elements.cityInput().type('Bratislava');
    newInvoicePage.elements.postCodeInput().type('85107');
    newInvoicePage.elements.countryInput().type('Slovakia')
    newInvoicePage.selectCountry('SVK');
    newInvoicePage.elements.currencyInput().type('EUR');
    newInvoicePage.selectCurrency('EUR');
    newInvoicePage.elements.amountInput().type('100');
    newInvoicePage.elements.descriptionInput().type('This is the test invoice')
    newInvoicePage.elements.generateInvoiceBtn().click();
    // intercept the api call send by the above line
    cy.intercept('/api/invoices').as('getInvoices')
    // submit the invoice form
    newInvoicePage.elements.submitInvoiceBtn().click();
    newInvoicePage.elements.invoiceSentOkBtn().click();
    // The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource
    cy.wait('@getInvoices').its('response.statusCode').should('eq', 201)
    // visit payment link from the details
    invoiceDetailsPage.elements.paymentLink().invoke('text').then((link) => {
      cy.visit(link);
    })
    // check the values at the end in the widget app
    widgetAppPage.elements.merchantName().contains('Demo store');
    widgetAppPage.elements.description().contains('This is the test invoice');
    widgetAppPage.elements.totalAmount().contains('€ 100.00');
  })
})