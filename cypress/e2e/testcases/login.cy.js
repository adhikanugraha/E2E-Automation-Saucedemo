import loginVerif from "../pageObjects/asserts/loginVerif";
import loginAction from "../pageObjects/keywordActions/loginAction";

describe('Login Test', ()=> {
    it('Should login successfully and view product page', () => {
        loginAction.visitLogin();
        loginVerif.shouldShowLoginForm();
        loginAction.enterUsername('standard_user');
        loginAction.enterPassword('secret_sauce');
        loginAction.clickLoginButton();
        loginVerif.shouldRedirectToInventory();
    });
});