import loginSelector from "../selectors/loginSelector"
class loginAction{
    visitLogin(){
        cy.visit('https://www.saucedemo.com/');
    }
    enterUsername(username){
        cy.get(loginSelector.usernameInput).type(username);
    }
    enterPassword(password){
        cy.get(loginSelector.passwordInput).type(password);
    }
    clickLoginButton(){
        cy.get(loginSelector.loginBtn).click()
    }    
}
export default new loginAction;