import cartVerif from "../pageObjects/asserts/cartVerif";
import loginVerif from "../pageObjects/asserts/loginVerif";
import productVerif from "../pageObjects/asserts/productVerif";
import loginAction from "../pageObjects/keywordActions/loginAction";
import productAction from "../pageObjects/keywordActions/productAction";
import cartData from "../../fixtures/addTocartData.json";

describe('Add to Cart', ()=> {
    beforeEach(() => {
            loginAction.visitLogin();
            loginAction.enterUsername('standard_user');
            loginAction.enterPassword('secret_sauce');
            loginAction.clickLoginButton();
            
        });
        
    cartData.forEach((data) => {
        it(`${data.case}`, () => {
            productVerif.verifProductDisplayed();
            productVerif.cartShouldEmpty();

            data.products.forEach((p) => productAction.addProductToCart(p));

            productVerif.cartBadgeShouldVisible();
            productVerif.verifBadgeCount(data.products.length);
            productAction.goToCart();
            cartVerif.verifItemCount(data.products.length);
            cartVerif.verifyAllProducts(data.products);
        });
    });

    
    
});