/// <reference types="cypress" />

describe('Payment Fitur Test', function() {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')

        cy.fixture("user").then(user => {
            const username = user.username 
            const password = user.password
        
        cy.login(username, password)
        cy.newPay()
        cy.newSPay()
        //cy.logout()

        })
    });
})