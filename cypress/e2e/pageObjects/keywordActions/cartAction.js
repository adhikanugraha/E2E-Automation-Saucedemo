import cartSelector from "../selectors/cartSelector";

class cartAction{
    ClickContinueShopping(){
        cy.get(cartSelector.continueShoppingButton).click();
    }
    ClickCheckout(){
        cy.get(cartSelector.checkoutButton).click();
    }
    removeProduct(name){
        cy.xpath(cartSelector.removeButtonByName(name)).click();
    }
}
export default new cartAction; 