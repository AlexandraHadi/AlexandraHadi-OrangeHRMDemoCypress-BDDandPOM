class LoginPage {

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    username() {
        return cy.get('[name="username"]')
    }

    password() {
        return cy.get('[name="password"]')
    }

    loginButton() {
        return cy.get('button[type="submit"]')
    }

    login(username, password) {
        this.username().type(username)
        this.password().type(password)
        this.loginButton().click()
    }

}

export default new LoginPage()