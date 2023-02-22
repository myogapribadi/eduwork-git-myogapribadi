/// <reference types="cypress"/>

describe('Automation Test Midtrans', () => {
    before(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')
    })
        it('Payment Via Shopee Pay', () => {
            cy.get('.buy').click();
            cy.get('input[value="Budi"]').clear();
            cy.get('input[value="Budi"]').type('Jony Sheed');
            cy.get('input[value="budi@utomo.com"]').clear();
            cy.get('input[value="budi@utomo.com"]').type('jony@gmail.com');
            cy.get('input[value="081808466410"]').clear();
            cy.get('input[value="081808466410"]').type('081245678');
            cy.get('input[value="Jakarta"]').clear();
            cy.get('input[value="Jakarta"]').type('Bogor');
            cy.get('textarea').clear();
            cy.get('textarea').type('Bojong Jengkol');
            cy.get('input[value="10220"]').clear();
            cy.get('input[value="10220"]').type('16715');
            cy.get('.cart-checkout').click();
            cy.wait(500)
            cy.get('#header').should('be.visible')
        })
})