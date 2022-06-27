Cypress E2E tests

# Quick start guide:
install all dependencies:
`npm i`

set environmental variables:
1. create `.env` file in main directory
2. copy content of `.env.example` to `.env` file
3. fill **all** the variables with data, like shown on this single example:
`BASE_URL=https://www.saucedemo.com`

start all tests:
`npm run cy:run`

start cypress UI:
`npm run cy:open`

format tests code:
`npm run cy:format`

check test code linting:
`npm run cy:lint`

fix test code linting:
`npm run cy:lint-fix`

# To setup github actions
open your repository `Settings`
then click on `Secrets` -> `Actions`
next click button `New repository secret` and
add secrets for **all** environmental variables from `.env.example` file
