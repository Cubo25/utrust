class newInvoicePage {
  elements = {
    customerNameInput: () => cy.get("#customerName"),

    sendIssuedEmailCheckbox: () => cy.get("#sendIssuedEmail"),

    customerEmailInput: () => cy.get("#customerEmail"),

    billingAddressInput: () => cy.get("#billingAddress"),

    cityInput: () => cy.get("#city"),

    postCodeInput: () => cy.get("#postCode"),

    countryInput: () => cy.get("#downshift-5-input"),

    countryInputOption: (country) => cy.get(`[data-test="option-${country}"]`),

    currencyInput: () => cy.get("#downshift-4-input"),

    currencyInputOption: (currency) =>
      cy.get(`[data-test="option-${currency}"]`),

    amountInput: () => cy.get("#amount"),

    descriptionInput: () => cy.get("#description"),

    generateInvoiceBtn: () => cy.get('[data-test="generate-invoice-button"]'),

    submitInvoiceBtn: () => cy.get('[data-test="submit-new-invoice-button"]'),

    invoiceSentOkBtn: () => cy.get('[data-test="invoice-sent-ok"]'),
  };

  selectCountry(country) {
    this.elements.countryInputOption(country).click();
  }

  selectCurrency(currency) {
    this.elements.currencyInputOption(currency).click();
  }
}

module.exports = new newInvoicePage();
