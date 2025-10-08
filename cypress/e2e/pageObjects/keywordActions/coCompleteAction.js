import coCompleteselector from "../selectors/coCompleteSelector";

class coCompleteAction{
    clickBackHome(){
        cy.get(coCompleteselector.backHomeBtn).click();
    }
}