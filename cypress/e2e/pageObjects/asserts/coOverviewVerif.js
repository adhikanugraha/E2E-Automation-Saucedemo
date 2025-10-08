import coOverviewSelector from "../selectors/coOverviewSelector";

class coOverviewVerif{
    ShouldShowAllItemDetail(){
        cy.get(coOverviewSelector.itemName).should('be.visible');
        cy.get(coOverviewSelector.itemPrice).should('be.visible');
        cy.get(coOverviewSelector.itemQuantity).should('be.visible');
        cy.get(coOverviewSelector.ItemDesc).should('be.visible');
    }
    shouldShowPaymenInfo(){
        cy.get(coOverviewSelector.paymentInfo).should('be.visible');
    }
    shouldShowShippingInfo(){
        cy.get(coOverviewSelector.shippingInfo).should('be.visible');
    }
    shouldShowPriceInfo(){
        cy.get(coOverviewSelector.subTotal).should('be.visible');
        cy.get(coOverviewSelector.tax).should('be.visible');
        cy.get(coOverviewSelector.total).should('be.visible');
    }
    verifyItemCount(expectedCount){
        cy.get(coOverviewSelector.cartItem).should('have.length',expectedCount);
    }
    verifyAllProducts(expectedProducts) {
        cy.get(coOverviewSelector.itemName).should(($items) => {
            const actualNames = $items.map((i, el) => Cypress.$(el).text().trim()).get();
            expect(actualNames).to.deep.equal(expectedProducts);
        });
    } 

    

}
export default new coOverviewVerif;