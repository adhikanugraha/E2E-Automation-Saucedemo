import coInfoSelector from "../selectors/coInfoSelector";

class coInfoVerif{
    shouldDisplayCoForm(){
        cy.get(coInfoSelector.firstnameInput).should('be.visible');
        cy.get(coInfoSelector.lastnameInput).should('be.visible');
        cy.get(coInfoSelector.addressInput).should('be.visible');
        cy.get(coInfoSelector.addressInput).should('be.visible');
        cy.get(coInfoSelector.continueBtn).should('be.visible');
        cy.get(coInfoSelector.cancelBtn).should('be.visible');
    }
    shouldShowErrorMessage(expectedMessage){
        cy.get(coInfoSelector.errorMessage).should('be.visible').and('contain.text',expectedMessage);
    }    

}
export default new coInfoVerif;