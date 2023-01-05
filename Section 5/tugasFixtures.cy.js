/// <reference types="cypress" />

describe('Login with fixtures data', function() {
    it('Should try login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')

        cy.fixture("user").then(user => {
            const username = user.standard_user 
            const password = user.secret_sauce
        
        cy.loginS(username, password)
        cy.logoutS()

        })
    });
})