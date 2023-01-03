class widgetAppPage{

    elements = {
        // in here we need better selectors
        merchantName : () => cy.get('.Details_head__1Ey_M'),
  
        description : () => cy.get('.Details_listItems__QWDe5'),

        totalAmount : () =>  cy.get('.Details_listTotal__1bJL4'),

    }
    
}

module.exports = new widgetAppPage();