import loginSelector from "../selectors/loginSelector"
class loginAction{
    visitLogin(){
        cy.visit('https://www.saucedemo.com/');
    }
    enterUsername(username){
        if(username){
            cy.get(loginSelector.usernameInput).type(username);
        }
        else{
            cy.get(loginSelector.usernameInput).clear();
        }
        
    }
    enterPassword(password){
        if(password){
            cy.get(loginSelector.passwordInput).type(password);
        }
        else{
            cy.get(loginSelector.passwordInput).clear();
        }
        }
    clickLoginButton(){
        cy.get(loginSelector.loginBtn).click()
    }    
}
export default new loginAction;