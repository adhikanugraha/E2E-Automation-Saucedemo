import loginVerif from "../pageObjects/asserts/loginVerif";
import loginAction from "../pageObjects/keywordActions/loginAction";
import loginData from "../../fixtures/loginData.json";

describe('Login Test (Data-Driven)', () => {
  loginData.forEach((data) => {
    it(`${data.case}`, () => {
      loginAction.visitLogin();
      loginVerif.shouldShowLoginForm();
      loginAction.enterUsername(data.username);
      loginAction.enterPassword(data.password);
      loginAction.clickLoginButton();

      if (data.expectedUrl) {
        loginVerif.shouldRedirectTo(data.expectedUrl);
      } else if (data.expectedError) {
        loginVerif.shouldShowError(data.expectedError);
      }
    });
  });
});