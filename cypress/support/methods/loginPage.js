import { loginPage } from "../selectors/loginPage";

Cypress.Commands.add("fillUsername", (username) => {
  cy.getByDataTest(loginPage.inputs.username).clear().type(username);
});

Cypress.Commands.add("fillPassword", (password) => {
  cy.getByDataTest(loginPage.inputs.password).clear().type(password);
});

Cypress.Commands.add("submitLoginForm", () => {
  cy.getByDataTest(loginPage.buttons.logIn).click();
});

Cypress.Commands.add("fillAndSubmitLoginForm", (username, password) => {
  cy.fillUsername(username);
  cy.fillPassword(password);
  cy.submitLoginForm();
});
