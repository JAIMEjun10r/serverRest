# ServeRest Automation Project

This project contains automated tests for the [ServeRest API](https://serverest.dev), a RESTful API designed for testing purposes. The tests are written using [Cypress](https://www.cypress.io/) and cover both positive and negative scenarios for user management and authentication.

---

## Table of Contents
- [About ServeRest](#about-serverest)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [How to Run the Tests](#how-to-run-the-tests)
- [Test Scenarios](#test-scenarios)
- [ServeRest Setup](#serverest-setup)
- [Contributing](#contributing)
- [License](#license)

---

## About ServeRest

ServeRest is a RESTful API available online, via npm, or through Docker. It is designed for testing purposes and provides pre-configured routes, rules, and data. 

### Why Use ServeRest?
- **Online Environment**: Access the API at [https://serverest.dev](https://serverest.dev). Data is reset daily.
- **Local Environment**: Use npm or Docker to run ServeRest locally. This ensures data consistency and prevents interference from other users.

---

### Project Structure

```
cypress/
├── e2e/
│   ├── usuario.cy.js        # Tests for user management
│   └── login.cy.js          # Tests for authentication
├── support/
│   ├── commands/
│   │   ├── usuario.js       # Custom Cypress commands for user management
│   │   └── login.js         # Custom Cypress commands for authentication
│   └── utils/
│       └── funcoes.js       # Utility functions for generating random data
```


---

## Prerequisites

Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (optional, for local ServeRest setup)

---

## How to Run the Tests

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/serverest-automation.git
   cd serverest-automation

2. npm install
3. Start the ServeRest API:

   Online: No setup required. The tests will use https://serverest.dev.
   Local (npm):
   npx serverest@latest
4. npx cypress open

----------------------------------------------------------------------------------
Test Scenarios
Positive Scenarios
User Management:
Create a user successfully.
Delete a user successfully.
Retrieve a user by ID.
Authentication:

Login successfully with valid credentials.
Negative Scenarios
User Management:

Attempt to create a user without required fields (e.g., name, email, password).
Attempt to delete a non-existent user.
Authentication:

Login with invalid email format.
Login with incorrect password.
Login with empty fields.
