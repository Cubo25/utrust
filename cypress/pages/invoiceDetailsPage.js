class invoiceDetailsPage {
  elements = {
    paymentLink: () => cy.get(".CodeDisplay_text__3U3UO"),
  };
}

module.exports = new invoiceDetailsPage();
