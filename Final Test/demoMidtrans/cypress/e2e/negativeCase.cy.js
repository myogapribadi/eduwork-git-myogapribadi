/// <reference types="cypress"/>

describe('Automation Test on Midtrans Pillow', () => {
    // beforeEach(() => {
    //     cy.clearCookies()
    //     cy.clearLocalStorage()
    //     cy.visit('https://demo.midtrans.com/')

    // });

    it('.Should() - be checking Input number only in field email', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.InputNumberinEmail()
        cy.get('*[class^="trans-status trans-error"]').should('be.visible').pause()
    });

    it('.Should() - be checking Input character only in field Phone', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.InputCharinPhone()
    });

    it('.Should() - be checking Input character only in field Postal Code', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.InputCharinPoscode()
    });

    it('.Should() - be checking Input Special character in field Name', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.InputSCharinName()
    });

    it('.Should() - be checking Change product prices', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.ChangePorductPrices()
    });

    it('.Should() - be checking Does not assign any value to the field', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.DoesNotAssigntoField()
        cy.get('*[class^="trans-status trans-error"]').should('be.visible').pause()
    });

    it('.Should() - be checking Input 50 number in field phone no', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.Input50NuminPhone()
    });
});