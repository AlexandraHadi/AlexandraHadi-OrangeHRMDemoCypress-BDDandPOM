describe('OrangeHRM Testing', () => {
  it('Login passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    //verify url should contain /dashboard
    cy.url().should('include', '/dashboard')
    //wait until the dashboard page is loaded
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    //screenshot the dashboard page
    cy.screenshot('dashboard')
  })

  it('Open Admin Page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    //verify url should contain /dashboard
    cy.url().should('include', '/dashboard')
    //wait until the dashboard page is loaded
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    //Click Admin menu
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    //verify url should contain /admin
    cy.url().should('include', '/admin')
    //wait until the admin page is loaded
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    //screenshot the admin page
    cy.screenshot('admin')
  })

  it('Add Admin User', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    //verify url should contain /dashboard
    cy.url().should('include', '/dashboard')
    //wait until the dashboard page is loaded
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    //Click Admin menu
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    //verify url should contain /admin
    cy.url().should('include', '/admin')
    //wait until the admin page is loaded
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    // click Add button
    cy.get('.orangehrm-header-container > .oxd-button').click()
    // wait until the add user page is loaded
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    // select User Role
    cy.contains('.oxd-select-text-input', '-- Select --').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    // select Status
    cy.contains('.oxd-select-text-input', '-- Select --').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    // input Employee Name
    cy.get('.oxd-autocomplete-text-input > input').type('test')
    cy.wait(2000)
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
    // input Username
    cy.get('.oxd-input-group > :nth-child(2) > .oxd-input').eq(0).type('testUserABC')
    // input Password
    cy.get('[type="password"]').eq(0).type('Test@1234')
    // input Confirm Password
    cy.get('[type="password"]').eq(1).type('Test@1234')
    // click Save button
    cy.get('.oxd-button--secondary').click()
    // wait until the admin page is loaded
    cy.wait(5000)
    // verify new user is added by searching the username
    cy.get('.oxd-input-group > :nth-child(2) > .oxd-input').eq(0).type('testUserABC')
    cy.get('[type="submit"]').click()
    cy.wait(3000)
    cy.get('.oxd-table-card > :nth-child(1) > :nth-child(2)').should('contain.text', 'testUserABC')
    //screenshot the result page
    cy.screenshot('addAdminUser')
    //delete the added user
    cy.get('.bi-trash').click()
    cy.get('.oxd-button--label-danger').click()
  })


})
