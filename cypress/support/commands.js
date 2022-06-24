import "./methods/loginPage";
import "./methods/inventoryPage";
import "./methods/checkoutPage";

Cypress.Commands.add("keepSession", () => {
  //Keep the Session alive when you jump to another test
  let str = [];
  cy.getCookies().then((cookies) => {
    for (let l = 0; l < cookies.length; l++) {
      if (cookies.length > 0 && l == 0) {
        str[l] = cookies[l].name;
        Cypress.Cookies.preserveOnce(str[l]);
      } else if (cookies.length > 1 && l > 1) {
        str[l] = cookies[l].name;
        Cypress.Cookies.preserveOnce(str[l]);
      }
    }
  });
});

Cypress.Commands.add("getByDataTest", (selector) => {
  return cy.get(`[data-test = ${selector}]`);
});

Cypress.Commands.add("checkValidation", (validation) => {
  cy.getByDataTest("error").should("contain", validation);
});

Cypress.Commands.add("clickContinue", () => {
  cy.getByDataTest("continue").click();
});
