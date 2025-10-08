import coInfoSelector from "../selectors/coInfoSelector";

class coInfoAction {
    enterFirstname(firstname){
        cy.get(coInfoSelector.firstnameInput).type(firstname);
    }
    enterLastname(lastname){
        cy.get(coInfoSelector.lastnameInput).type(lastname);
    }
    enterAdress(adress){
        cy.get(coInfoSelector.addressInput).type(adress);
    }
    clickCancel(){
        cy.get(coInfoSelector.cancelBtn).click();
    }
    clickContinue(){
        cy.get(coInfoSelector.continueBtn).click();
    }
}
export default new coInfoAction;