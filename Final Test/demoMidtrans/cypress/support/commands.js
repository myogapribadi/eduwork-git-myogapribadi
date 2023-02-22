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

Cypress.Commands.add('InputNumberinEmail', () => {
    cy.get('.buy').click();
    cy.get('input[value="Budi"]').clear();
    cy.get('input[value="Budi"]').type('Aldi');
    cy.get('input[value="budi@utomo.com"]').clear();
    cy.get('input[value="budi@utomo.com"]').type('4444444');
    cy.get('input[value="081808466410"]').clear();
    cy.get('input[value="081808466410"]').type('0886123453');
    cy.get('input[value="Jakarta"]').clear();
    cy.get('input[value="Jakarta"]').type('Bogor');
    cy.get('textarea').clear();
    cy.get('textarea').type('Ciawi');
    cy.get('input[value="10220"]').clear();
    cy.get('input[value="10220"]').type('16710');
    cy.get('.cart-checkout').click();
})

Cypress.Commands.add('InputCharinPhone', () => {
    cy.get('.buy').click();
    cy.get('input[value="Budi"]').clear();
    cy.get('input[value="Budi"]').type('Aldi');
    cy.get('input[value="budi@utomo.com"]').clear();
    cy.get('input[value="budi@utomo.com"]').type('aldi@gmail.com');
    cy.get('input[value="081808466410"]').clear();
    cy.get('input[value="081808466410"]').type('aaaaaaaaaa');
    cy.get('input[value="Jakarta"]').clear();
    cy.get('input[value="Jakarta"]').type('Bogor');
    cy.get('textarea').clear();
    cy.get('textarea').type('Ciawi');
    cy.get('input[value="10220"]').clear();
    cy.get('input[value="10220"]').type('16710');
    cy.get('.cart-checkout').click();
})

Cypress.Commands.add('InputCharinPoscode', () => {
    cy.get('.buy').click();
    cy.get('input[value="Budi"]').clear();
    cy.get('input[value="Budi"]').type('Aldi');
    cy.get('input[value="budi@utomo.com"]').clear();
    cy.get('input[value="budi@utomo.com"]').type('aldi@gmail.com');
    cy.get('input[value="081808466410"]').clear();
    cy.get('input[value="081808466410"]').type('0886123453');
    cy.get('input[value="Jakarta"]').clear();
    cy.get('input[value="Jakarta"]').type('Bogor');
    cy.get('textarea').clear();
    cy.get('textarea').type('Ciawi');
    cy.get('input[value="10220"]').clear();
    cy.get('input[value="10220"]').type('aaaaa');
    cy.get('.cart-checkout').click();
})

Cypress.Commands.add('InputSCharinName', () => {
    cy.get('.buy').click();
    cy.get('input[value="Budi"]').clear();
    cy.get('input[value="Budi"]').type('*********');
    cy.get('input[value="budi@utomo.com"]').clear();
    cy.get('input[value="budi@utomo.com"]').type('aldi@gmail.com');
    cy.get('input[value="081808466410"]').clear();
    cy.get('input[value="081808466410"]').type('0886123453');
    cy.get('input[value="Jakarta"]').clear();
    cy.get('input[value="Jakarta"]').type('Bogor');
    cy.get('textarea').clear();
    cy.get('textarea').type('Ciawi');
    cy.get('input[value="10220"]').clear();
    cy.get('input[value="10220"]').type('16710');
    cy.get('.cart-checkout').click();
})

Cypress.Commands.add('ChangePorductPrices', () => {
    cy.get('.buy').click();
    cy.get('input[value="20000"]').clear();
    cy.get('input[value="20000"]').type('100000');
    cy.get('input[value="Budi"]').clear();
    cy.get('input[value="Budi"]').type('Aldi');
    cy.get('input[value="budi@utomo.com"]').clear();
    cy.get('input[value="budi@utomo.com"]').type('aldi@gmail.com');
    cy.get('input[value="081808466410"]').clear();
    cy.get('input[value="081808466410"]').type('0886123453');
    cy.get('input[value="Jakarta"]').clear();
    cy.get('input[value="Jakarta"]').type('Bogor');
    cy.get('textarea').clear();
    cy.get('textarea').type('Ciawi');
    cy.get('input[value="10220"]').clear();
    cy.get('input[value="10220"]').type('16710');
    cy.get('.cart-checkout').click();
})

Cypress.Commands.add('DoesNotAssigntoField', () => {
    cy.get('.buy').click();
    cy.get('input[value="Budi"]').clear();
    cy.get('input[value="Budi"]')
    cy.get('input[value="budi@utomo.com"]').clear();
    cy.get('input[value="budi@utomo.com"]')
    cy.get('input[value="081808466410"]').clear();
    cy.get('input[value="081808466410"]')
    cy.get('input[value="Jakarta"]').clear();
    cy.get('input[value="Jakarta"]')
    cy.get('textarea').clear();
    cy.get('textarea')
    cy.get('input[value="10220"]').clear();
    cy.get('input[value="10220"]')
    cy.get('.cart-checkout').click();
})

Cypress.Commands.add('Input50NuminPhone', () => {
    cy.get('.buy').click();
    cy.get('input[value="Budi"]').clear();
    cy.get('input[value="Budi"]').type('Aldi');
    cy.get('input[value="budi@utomo.com"]').clear();
    cy.get('input[value="budi@utomo.com"]').type('aldi@gmail.com');
    cy.get('input[value="081808466410"]').clear();
    cy.get('input[value="081808466410"]').type('12345678912121234567876543212343223456788899898765');
    cy.get('input[value="Jakarta"]').clear();
    cy.get('input[value="Jakarta"]').type('Bogor');
    cy.get('textarea').clear();
    cy.get('textarea').type('Ciawi');
    cy.get('input[value="10220"]').clear();
    cy.get('input[value="10220"]').type('16710');
    cy.get('.cart-checkout').click();
})