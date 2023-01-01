/// <reference types="cypress" />

describe('Login with fixtures data', function() {
    it('Should try login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.fixture("user").then(user => {
            const username = user.username 
            const password = user.password

        cy.get('#user_login').clear()
        cy.get('#user_login').type(username)

        cy.get('#user_password').clear()
        cy.get('#user_password').type(password)

        cy.get('input[name="submit"]').click()
        cy.get('#user_remember_me').click()
        cy.get('.alert-error').should('contain.text','Login and/or password are wrong')
        
        // Forget your password?
        cy.get('a').contains('Forgot your password').click()
        
        cy.get('#user_email').clear()
        cy.get('#user_email').type(username)

        cy.get('h3').should('contain.text', 'Forgotten Password')

        // Back to home page
        cy.get('.brand').should('contain.text', 'Zero Bank').click()

        // Search box test
        cy.get('#searchTerm').clear()
        cy.get('#searchTerm').type('My Money Map{enter}')

        // Go to My Money Map
        cy.get('a').contains('Zero - My Money Map').click()
        cy.url().should('include','http://zero.webappsecurity.com/login.html')

        })
    });
})