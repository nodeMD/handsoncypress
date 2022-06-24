import {
  randomItemNumberInRange,
  validUser,
  fakeUser,
} from "../support/methods/generateData";
import { cartPage } from "../support/selectors/cartPage";
import { checkoutPage } from "../support/selectors/checkoutPage";
import { inventoryPage } from "../support/selectors/inventoryPage";

const desiredNumberOfItems = 6;
const randomItem = randomItemNumberInRange(0, 5);
const shippingMessage = "FREE PONY EXPRESS DELIVERY!";
const thankYouMessage = "THANK YOU FOR YOUR ORDER";

describe("Checkout tests", () => {
  before(() => {
    cy.visit("/");
    cy.fillAndSubmitLoginForm(validUser.email, validUser.password);
  });
  afterEach(() => {
    cy.keepSession();
  });

  it(`user is able to see list of products is which has length of ${desiredNumberOfItems} items`, () => {
    cy.get(inventoryPage.containers.item).should(
      "have.length",
      desiredNumberOfItems
    );
  });

  it("user is able to add random item to cart then check if cart icon shows proper number and check if the proper price is shown on cart page", () => {
    cy.addItemToCart(randomItem);
    cy.contains(inventoryPage.buttons.removeFromCart).should("be.visible");
    cy.get(inventoryPage.containers.itemPrice)
      .eq(randomItem)
      .invoke("text")
      .as("itemPrice");

    cy.get(inventoryPage.icons.shoppingCart).should("contain", "1");
    cy.openCart();
    cy.url().should("include", "/cart");
    cy.get(cartPage.containers.cartItem).should("have.length", 1);
    cy.get("@itemPrice").then((price) => {
      cy.get(cartPage.containers.cartItemPrice).should("contain", price);
    });
  });

  it("user is able to proceed to checkout", () => {
    cy.getByDataTest(cartPage.buttons.checkout).click();
    cy.url().should("include", "/checkout-step-one");
  });

  it("user is unable to continue without filling checkout form with proper data", () => {
    cy.clickContinue();
    cy.checkValidation(checkoutPage.validations.firstNameIsRequired);
    cy.fillFirstName(fakeUser.name);
    cy.clickContinue();
    cy.checkValidation(checkoutPage.validations.lastNameIsRequired);
    cy.fillLastName(fakeUser.lastName);
    cy.clickContinue();
    cy.checkValidation(checkoutPage.validations.postalCodeIsRequired);
  });

  it("user is able to continue after filling checkout form with proper data", () => {
    cy.fillPostalCode(fakeUser.postalCode);
    cy.clickContinue();
    cy.url().should("include", "/checkout-step-two");
  });

  it(`user is able to see that the shipping information is '${shippingMessage}'`, () => {
    cy.get(checkoutPage.labels.summary)
      .contains(shippingMessage)
      .should("be.visible");
  });

  it(`user is able to see confirmation message: '${thankYouMessage}'`, () => {
    cy.getByDataTest(checkoutPage.buttons.finish).click();
    cy.get(checkoutPage.headers.complete)
      .contains(thankYouMessage)
      .should("be.visible");
  });
});
