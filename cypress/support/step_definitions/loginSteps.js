import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../pages/LoginPage";

import DashboardPage from "../../pages/DashboardPage";

import AdminPage from "../../pages/AdminPage";

let data;

before(()=>{

    cy.fixture('user').then((user)=>{

        data=user;

    })

})

Given('user is on login page',()=>{

    LoginPage.visit()

})

When('user logs in',()=>{

    LoginPage.login(data.username,data.password)

})

Then('dashboard should appear',()=>{

    DashboardPage.verifyDashboard()

})

Given('user has logged in',()=>{

    LoginPage.visit()

    LoginPage.login(data.username,data.password)

})

Given('user opens Admin page',()=>{

    AdminPage.clickAdminMenu()

})

When('user adds {string} with role {string}',(username,role)=>{

    AdminPage.clickAddButton()

    AdminPage.addUser(username,role)

})

Then('user {string} should exist',(username)=>{

    AdminPage.searchUser(username)

    AdminPage.verifyUser(username)

})

When('user login with invalid password',()=>{

    LoginPage.login(data.username,data.wrongPassword)

})

Then('error message should appear',()=>{

    cy.contains('Invalid credentials').should('be.visible')

})