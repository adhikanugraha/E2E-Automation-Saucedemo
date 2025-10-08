import productSelector from "../selectors/productSelector";

class productVerif{
    productAddBtnVisible(name){
        cy.xpath(productSelector.productNameBtn(name)).should('be.visible');
    }
    cartShouldEmpty(){
        cy.get(productSelector.cartBadge).should('not.exist');
    }
    cartBadgeShouldVisible(){
        cy.get(productSelector.cartBadge).should('be.visible');
    }
    shouldRedirectToCart(){
        cy.url().should('include','/cart.html');
    }
    verifBadgeCount(expectedCount){
        cy.get(productSelector.cartBadge).should('be.visible').and('have.text',expectedCount.toString());
    }
    verifProductDisplayed(){
        cy.get(productSelector.inventoryItem).should('be.visible').and('have.length.greaterThan',0);
    }

}
export default new productVerif;