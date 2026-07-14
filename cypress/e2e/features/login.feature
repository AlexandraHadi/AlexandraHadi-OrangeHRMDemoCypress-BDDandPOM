Feature: Login and Add Multiple Admins

Scenario: User Login

Given user is on login page

When user logs in

Then dashboard should appear


Scenario Outline: Add Admin

Given user has logged in

And user opens Admin page

When user adds "<username>" with role "<role>"

Then user "<username>" should exist

Examples:

|username|role|
|cypressuser1|ESS|
|cypressuser2|Admin|


Scenario: Invalid Login

Given user is on login page

When user login with invalid password

Then error message should appear