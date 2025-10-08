import loginSelector from "../selectors/loginSelector";

class loginVerif {
    shouldShowLoginForm(){
        cy.get(loginSelector.usernameInput).should('be.visible');
        cy.get(loginSelector.passwordInput).should('be.visible');
        cy.get(loginSelector.loginBtn).should('be.visible');
    }
    shouldRedirectToInventory(){
        cy.url().should('include','/inventory.html');
    }
    shouldSeeErrorMassage(expectedMassage){
        cy.get(loginSelector.errorMessage).should('be.visible').and('contain.text', expectedMessage);
    }
}
export default new loginVerif;