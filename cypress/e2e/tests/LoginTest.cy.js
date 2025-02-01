import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";

describe('Success and Fail login flow', { tags: ['@Login', '@regression', '@smoke'] }, () => {

    let basePage;
    before(() => {
        basePage = new BasePage();
    })

    beforeEach(() => {
        cy.fixture('users.json').as('users')
    })

    it("Should login successfully with valid credentials", {tags: '@smoke'}, function () {

        LoginPage
            .loginWithUI(this.users.validUser.email, this.users.validUser.password)
    })

    it("Should fail to login with invalid credentials", {tags: '@smoke'}, function () {

        LoginPage
            .loginWithUI(this.users.invalidUser.email, this.users.invalidUser.password)
    })

    it("Should perform login and logout", function () {

    })
  })

