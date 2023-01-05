// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Login
Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('.btn-primary').click()
})

Cypress.Commands.add('loginS', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('logoutS', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})

// Add new payee
Cypress.Commands.add('newPay', () => {
    cy.get('#pay_bills_tab').should('contain.text', 'Pay Bills').click()
    cy.get('.ui-corner-top').contains('Add New Payee').click()
    cy.get('#np_new_payee_name').type('Hana')
    cy.get('#np_new_payee_address').type('Naina')
    cy.get('#np_new_payee_account').type('Azam')
    cy.get('#np_new_payee_details').type('Sports')
    cy.get('#add_new_payee').click()

    cy.get('#alert_content').should('be.visible')
})

// Add new saved payee
Cypress.Commands.add('newSPay', () => {
    cy.get('#sp_payee').select('bofa').should('have.value', 'bofa')
    cy.get('#sp_account').select('4').should('have.value', '4')
    cy.get('#sp_amount').type('Naina')
    //cy.get('#sp_date').type('2023-01-04{enter}')
    cy.get('#sp_date').click()
    cy.get('.ui-corner-all').contains('Next').click()
    cy.contains('7').click()
    cy.get('#sp_description').type('Sports')

    cy.get('#pay_saved_payees').click()
    cy.get('#alert_content').should('be.visible')
})


// Logout
Cypress.Commands.add('logout', () => {
    cy.contains('username').click()
    cy.get('#logout_link').should('contain.text', 'Logout').click()
    })