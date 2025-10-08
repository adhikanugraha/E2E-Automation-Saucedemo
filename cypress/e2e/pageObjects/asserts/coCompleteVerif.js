import coCompleteselector from "../selectors/coCompleteSelector"

class coCompleteVerif{
    verifCoComplete(){
        cy.get(coCompleteselector.completeHeader).should('be.visible').and('contain',"Thank you for your order!");
        cy.get(coCompleteselector.completeText  ).should('be.visible').and('contain',"Your order has been dispatched, and will arrive just as fast as the pony can get there!");
        cy.get(coCompleteselector.backHomeBtn).should('be.visible');
    }
}
export default new coCompleteVerif;