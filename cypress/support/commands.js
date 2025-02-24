import "./methods/loginPage";
import "./methods/inventoryPage";
import "./methods/checkoutPage";

Cypress.Commands.add("getByDataTest", (selector) => {
  return cy.get(`[data-test = ${selector}]`);
});

Cypress.Commands.add("checkValidation", (validation) => {
  cy.getByDataTest("error").should("contain", validation);
});

Cypress.Commands.add("clickContinue", () => {
  cy.getByDataTest("continue").click();
});
