import * as faker from "@faker-js/faker/locale/en_GB";

export const fakeUser = {
  email: {
    withoutAtSign: faker.lorem.words(1),
    withoutDomain: `${faker.lorem.words(1)}@`,
  },
  password: {
    tooShort: faker.internet.password(9, false, /^[A-Za-z]*$/, "8Aa"),
    tooLong: faker.internet.password(81, false, /^[A-Za-z]*$/, "8Aa"),
    onlyLowerCaseLetters: faker.internet.password(10, false, /^[a-z]*$/),
    onlyUpperCaseLetters: faker.internet.password(10, false, /^[A-Z]*$/),
    withoutDigits: faker.internet.password(10, false, /^[A-Za-z]*$/),
  },
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  postalCode: faker.address.zipCode(),
};
export const validUser = {
  email: Cypress.env("testUserEmail"),
  password: Cypress.env("testUserPassword"),
};

export const randomItemNumberInRange = (min, max) =>
  faker.datatype.number({ min, max });
