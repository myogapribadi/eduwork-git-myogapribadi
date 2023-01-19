/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const LoginPage = require("../../pages/loginPages.cy");

Given('I open login page', () => {
    LoginPage.visitUrl()
})
When('I submit login', () => {
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.signIn()
})
Then('I should see homepage', () => {
    cy.wait(100)
    cy.get('#account_summary_tab').should('be.visible')
})