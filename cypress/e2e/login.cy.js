import { fakeUser, validUser } from "../support/methods/generateData";
import { loginPage } from "../support/selectors/loginPage";

describe("Log in tests", () => {
  it("user is unable to log in to the app after filling the form with invalid data", () => {
    cy.visit("/");
    cy.submitLoginForm();
    cy.checkValidation(loginPage.validations.usernameIsRequired);
    cy.fillUsername(fakeUser.email.withoutDomain);
    cy.submitLoginForm();
    cy.checkValidation(loginPage.validations.passwordIsRequired);
    cy.fillPassword(fakeUser.password.onlyLowerCaseLetters);
    cy.submitLoginForm();
    cy.checkValidation(loginPage.validations.userNotFound);
  });

  it("user is able to log in to the app after filling the form with valid data", () => {
    cy.visit("/");
    cy.fillAndSubmitLoginForm(validUser.email, validUser.password);
    cy.url().should("include", "/inventory");
  });
});
