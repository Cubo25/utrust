class mainPage{

    elements ={

        paymentsSidebar : () => cy.get('[data-test="payments/orders-sidebarLink"]'),

        paymentsTabs : () => cy.get('[data-test="paymentsTabs"]'),

        newInvoiceBtn : () => cy.get('[data-test="button-new-invoice"]'),

    }
    // just an example
    createInvoice(){
        this.elements.newInvoiceBtn().click()
    }
}

module.exports = new mainPage();