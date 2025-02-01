import BasePage from "./BasePage";
const routes = require('../config/Routes');
import { ENDPOINT_PREFIX } from "../config/CONSTANT";

class LoginPage extends BasePage{

    get continueBtn() { 
        return cy.get('.login-button'); 
    }
    get loginInput() { return cy.get('#Email'); }
    get passwordInput() { return cy.get('#Password'); }
    get loginBtn() { return cy.get("input[value='Log in']"); }
    get alertMsg() { return cy.get('.validation-summary-errors'); }

    open() {
        return super.open(ENDPOINT_PREFIX + routes.LOGIN_ENDPOINT)
    }

    openRegistrationPage() {
        this.open();
        this.continueBtn.click();
    }

    loginWithUI(email, password) {
        this.open();
        this.loginInput.type(email)
        this.passwordInput.type(password)
        this.loginBtn.click()
    }
}

export default new LoginPage();