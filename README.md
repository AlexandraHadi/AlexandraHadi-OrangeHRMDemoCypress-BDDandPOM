# OrangeHRMDemoCypress-BDDandPOM

# OrangeHRM Automation Testing with Cypress (BDD & POM)

This project is an End-to-End (E2E) automation testing project for the OrangeHRM Demo application using Cypress with the Behavior Driven Development (BDD) approach and Page Object Model (POM) design pattern.

## Technologies

- Cypress
- JavaScript
- Cucumber (BDD)
- Page Object Model (POM)
- Cypress Mochawesome Reporter

## Test Scenarios

### Positive Test Cases
- Login with valid credentials
- Validate Dashboard page
- Navigate to Admin page
- Add a new Admin user
- Verify the newly created Admin user exists

### Negative Test Case
- Login with an invalid password

## Test Data

Sensitive data such as login credentials are stored using Cypress Fixture.

Example:

```json
{
  "username": "Admin",
  "password": "admin123"
}
```

## Running the Project

### Install dependencies

```bash
npm install
```

### Run in Cypress GUI

```bash
npx cypress open
```

### Run in Headless Mode

```bash
npx cypress run
```

## Test Report

This project uses **cypress-mochawesome-reporter** to generate HTML reports.

After running:

```bash
npx cypress run
```

the report can be found in the generated report folder (for example `cypress/reports/html` or `mochawesome-report`, depending on your configuration).

## Screenshots

Screenshots are automatically captured for failed test cases and stored in the `cypress/screenshots` folder.

## Project Features

- Behavior Driven Development (BDD)
- Page Object Model (POM)
- Reusable Page Objects
- Cucumber Feature Files
- Step Definitions
- Fixture for test data
- Mochawesome HTML Report
- Screenshot support

## Author

Alexandra Hadiprawira