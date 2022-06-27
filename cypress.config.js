const { defineConfig } = require("cypress");
const dotenv = require("dotenv")

dotenv.config({ path: ".env" });

module.exports = defineConfig({
  env: {
    testUserEmail: process.env.TEST_USER_EMAIL,
    testUserPassword: process.env.TEST_USER_PASSWORD
  },
  e2e: {
    chromeWebSecurity: false,
    baseUrl: process.env.BASE_URL,
  },
});
