class DashboardPage {

    verifyDashboard() {

        cy.url().should('include', '/dashboard')

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
            .should('contain', 'Dashboard')

        cy.screenshot('Dashboard')

    }

}

export default new DashboardPage()