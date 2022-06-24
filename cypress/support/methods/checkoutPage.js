import { checkoutPage } from "../selectors/checkoutPage";

Cypress.Commands.add("fillFirstName", (name) => {
  cy.getByDataTest(checkoutPage.inputs.firstName).clear().type(name);
});
Cypress.Commands.add("fillLastName", (lastName) => {
  cy.getByDataTest(checkoutPage.inputs.lastName).clear().type(lastName);
});
Cypress.Commands.add("fillPostalCode", (postalCode) => {
  cy.getByDataTest(checkoutPage.inputs.postalCode).clear().type(postalCode);
});
