const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASWWORD = '#user_password'
const SING_IN = 'input[name="submit"]'

class LoginPage{
    static visit() {
        cy.visit(URL)
    }
    static fillUsername(username) {
        cy.get(USERNAME).type(username)
    }
    static fillPassword(password) {
        cy.get(PASWWORD).type(password)
    }
    static signin() {
        cy.get(SING_IN)
    }
}

export default LoginPage