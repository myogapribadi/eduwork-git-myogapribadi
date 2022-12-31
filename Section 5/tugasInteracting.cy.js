/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.url().should('include', 'login.html')

        // Clear and input username
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Jony Sheed')

        // Clear and input password
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('Sheed')

        // Check keep me signed in
        cy.get('#user_remember_me').click()
    });
})