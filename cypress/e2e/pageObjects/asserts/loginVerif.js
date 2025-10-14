import loginSelector from "../selectors/loginSelector";

class loginVerif {
    shouldShowLoginForm(){
        cy.get(loginSelector.usernameInput).should('be.visible');
        cy.get(loginSelector.passwordInput).should('be.visible');
        cy.get(loginSelector.loginBtn).should('be.visible');
    }
    shouldRedirectTo(expectedUrl){
        cy.url().should('include',expectedUrl);
    }
    shouldShowError(expectedMessage){
        cy.get(loginSelector.errorMessage).should('be.visible').and('contain.text', expectedMessage);
    }
}
export default new loginVerif;