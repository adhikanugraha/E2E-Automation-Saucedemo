import cartVerif from "../pageObjects/asserts/cartVerif";
import loginVerif from "../pageObjects/asserts/loginVerif";
import productVerif from "../pageObjects/asserts/productVerif";
import loginAction from "../pageObjects/keywordActions/loginAction";
import productAction from "../pageObjects/keywordActions/productAction";

describe('Add to Cart', ()=> {
    beforeEach(() => {
            loginAction.visitLogin();
            loginAction.enterUsername('standard_user');
            loginAction.enterPassword('secret_sauce');
            loginAction.clickLoginButton();
            
        });
    it('Can add product to cart',() => {
        const expectedProducts = [
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light'
        ];

        productVerif.verifProductDisplayed();
        productVerif.cartShouldEmpty();
        
        expectedProducts.forEach((productName) => {
            productAction.addProductToCart(productName);
        });
        productVerif.cartBadgeShouldVisible();
        productVerif.verifBadgeCount(expectedProducts.length);
        productAction.goToCart();
        cartVerif.verifItemCount(expectedProducts.length);
        cartVerif.verifyAllProducts(expectedProducts);
    })

    
    
});