import cartSelector from "../selectors/cartSelector";

class cartVerif{
   verifItemCount(expectedCount){
    cy.get(cartSelector.cartItems).should('have.length',expectedCount);
   } 
   verifyAllProducts(expectedProducts) {
        cy.get(cartSelector.cartItemName).should(($items) => {
            const actualNames = $items.map((i, el) => Cypress.$(el).text().trim()).get();
            expect(actualNames).to.deep.equal(expectedProducts);
        });
    }
    shouldRedirectToCart(){
        cy.url().should('include','/checkout-step-one.html')
    } 
}
export default new cartVerif;