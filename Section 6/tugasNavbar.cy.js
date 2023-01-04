/// <reference types="cypress"/>

describe('Navbar test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'webappsecurity.com')
    });
    
    it('Should display online banking & feedback', () => {
        // display online banking
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('.hero-home').should('be.visible')
        cy.get('.span6').should('be.visible')
        cy.get('h3').should('contain.text', 'Our Bank is trusted by over 1,000,000 customers world wide.').and('be.visible')

        // display feedback
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('be.visible')
        cy.get('.form-inputs').should('be.visible')

        // back homepage
        cy.get('.brand').should('contain.text', 'Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('#homeMenu').should('be.visible')

    })
})