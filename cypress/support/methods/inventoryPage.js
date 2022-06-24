import { inventoryPage } from "../selectors/inventoryPage";

Cypress.Commands.add("addItemToCart", (itemNumber) => {
  cy.get(inventoryPage.buttons.addToCart).eq(itemNumber).click();
});

Cypress.Commands.add("openCart", () => {
  cy.get(inventoryPage.buttons.cart).click();
});
