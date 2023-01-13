/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPages'

Given('I open login page', () => {
    LoginPage.visit
})
When('I submit login', () => {
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.signin()
})
Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})