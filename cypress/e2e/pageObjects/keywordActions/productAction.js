import productSelector from "../selectors/productSelector";

class productAction{
    addProductToCart(productname){
        cy.xpath(productSelector.productNameBtn(productname)).click();
    }
    goToCart(){
        cy.get(productSelector.cartLink).click();
    }
}
export default new productAction;

