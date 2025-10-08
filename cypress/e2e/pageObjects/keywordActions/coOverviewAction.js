import coOverviewSelector from "../selectors/coOverviewSelector";

class coOverviewAction{
    clickFinish(){
        cy.get(coOverviewSelector.finishBtn).click();
    }
    clickCancel(){
        cy.get(coOverviewSelector.cancelBtn).click();
    }
}
export default new coOverviewAction;