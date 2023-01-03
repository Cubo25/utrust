class loginPage{

    elements ={

        emailInput : () => cy.get('#email'),

        passwordInput : () => cy.get('#password'),

        signInBtn : () => cy.get('#progress-status'),

    }
    clickOnSignin(){
        this.elements.signInBtn().click()
    }
}

module.exports = new loginPage();