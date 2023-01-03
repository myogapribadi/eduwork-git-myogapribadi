/// <reference types="cypress"/>

describe('Search Box Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
    })
    it('Should type into searchbox, submit and show results', () => {
        cy.get('#searchTerm').type('Online{enter}')
        cy.get('h2').should('contain.text', 'Search Results:')

        cy.get('a[href*="/online-banking.html').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get('a[href*="/bank/online-statements.html').should('contain.text', 'Zero - Online Statements')
    })
})