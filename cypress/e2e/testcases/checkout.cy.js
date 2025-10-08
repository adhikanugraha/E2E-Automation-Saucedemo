import coCompleteVerif from "../pageObjects/asserts/coCompleteVerif";
import coInfoVerif from "../pageObjects/asserts/coInfoVerif";
import coOverviewVerif from "../pageObjects/asserts/coOverviewVerif";
import cartAction from "../pageObjects/keywordActions/cartAction";
import coInfoAction from "../pageObjects/keywordActions/coInfoAction";
import coOverviewAction from "../pageObjects/keywordActions/coOverviewAction";
import loginAction from "../pageObjects/keywordActions/loginAction";
import productAction from "../pageObjects/keywordActions/productAction";

describe('Checkout', ()=> {
    const expectedProducts = [
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light'
    ];
    beforeEach(() => {
            loginAction.visitLogin();
            loginAction.enterUsername('standard_user');
            loginAction.enterPassword('secret_sauce');
            loginAction.clickLoginButton();
            expectedProducts.forEach((productName) => {
                productAction.addProductToCart(productName);
            });
            productAction.goToCart();
            cartAction.ClickCheckout();
            
        });
    it('Can complete checkout prosses',() => {
        coInfoVerif.shouldDisplayCoForm();
        coInfoAction.enterFirstname('Adhika');
        coInfoAction.enterLastname('Nugraha');
        coInfoAction.enterAdress('4321');
        coInfoAction.clickContinue();
        coOverviewVerif.verifyAllProducts(expectedProducts);
        coOverviewVerif.ShouldShowAllItemDetail();
        coOverviewVerif.shouldShowPaymenInfo();
        coOverviewVerif.shouldShowShippingInfo();
        coOverviewAction.clickFinish();
        coCompleteVerif.verifCoComplete();
    })

    
    
});