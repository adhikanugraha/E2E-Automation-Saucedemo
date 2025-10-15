import coInfoSelector from "../selectors/coInfoSelector";

class coInfoAction {
    enterFirstname(firstname){
        if(firstname){
            cy.get(coInfoSelector.firstnameInput).type(firstname);
        }
        else{
            cy.get(coInfoSelector.firstnameInput).clear();
        }
        
    }
    enterLastname(lastname){
        if(lastname){
            cy.get(coInfoSelector.lastnameInput).type(lastname);
        }
        else{
            cy.get(coInfoSelector.lastnameInput).clear();
        }
        
    }
    enterAdress(adress){
        if(adress){
            cy.get(coInfoSelector.adressInput).type(adress);
        }
        else{
            cy.get(coInfoSelector.adressInput).clear();
        }
    }
    clickCancel(){
        cy.get(coInfoSelector.cancelBtn).click();
    }
    clickContinue(){
        cy.get(coInfoSelector.continueBtn).click();
    }
}
export default new coInfoAction;