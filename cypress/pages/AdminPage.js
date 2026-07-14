class AdminPage {

    clickAdminMenu() {
        cy.contains('span', 'Admin').click()
        // cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.url().should('include', '/admin')
    }

    clickAddButton() {
        cy.contains('button', 'Add').click()
        cy.url().should('include', '/saveSystemUser')
    }

    addUser(username, role) {

        // ======================
        // USER ROLE
        // ======================
        cy.get('.oxd-select-text').eq(0).click()
        cy.contains('.oxd-select-option', role).click()

        // ======================
        // STATUS
        // ======================
        cy.get('.oxd-select-text').eq(1).click()
        cy.contains('.oxd-select-option', 'Enabled').click()

        // ======================
        // EMPLOYEE NAME
        // ======================
        cy.get('.oxd-autocomplete-text-input input')
            .type('test')

        cy.wait(3000)

        cy.get('.oxd-autocomplete-option')
            .first()
            .click()

        // ======================
        // USERNAME
        // ======================
        cy.get('.oxd-input-group > :nth-child(2) > .oxd-input')
            .eq(0)
            .type(username)

        // ======================
        // PASSWORD
        // ======================
        cy.get('input[type="password"]')
            .eq(0)
            .type('Test@1234')

        cy.get('input[type="password"]')
            .eq(1)
            .type('Test@1234')

        // ======================
        // SAVE
        // ======================
        cy.contains('button', 'Save').click()
        cy.wait(5000)
    }

    searchUser(username) {
        cy.wait(3000)
        cy.get('input.oxd-input')
            .eq(1)
            .clear()
            .type(username)

        cy.get('[type="submit"]').click()
        cy.wait(3000)
    }

    verifyUser(username) {
        cy.get('.oxd-table-card > :nth-child(1) > :nth-child(2)').should('contain.text', username)
        //screenshot the result page
        cy.screenshot('addAdminUser')
        //delete the added user so that the test can be run again
        cy.get('.bi-trash').click()
        cy.get('.oxd-button--label-danger').click()
    }
}

export default new AdminPage()