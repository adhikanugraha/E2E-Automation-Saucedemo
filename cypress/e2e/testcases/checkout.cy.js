import checkoutData from "../../fixtures/checkoutData.json";
import coCompleteVerif from "../pageObjects/asserts/coCompleteVerif";
import coInfoVerif from "../pageObjects/asserts/coInfoVerif";
import coOverviewVerif from "../pageObjects/asserts/coOverviewVerif";
import cartAction from "../pageObjects/keywordActions/cartAction";
import coInfoAction from "../pageObjects/keywordActions/coInfoAction";
import coOverviewAction from "../pageObjects/keywordActions/coOverviewAction";
import loginAction from "../pageObjects/keywordActions/loginAction";
import productAction from "../pageObjects/keywordActions/productAction";

describe('Checkout', ()=> {
    beforeEach(() => {
            loginAction.visitLogin();
            loginAction.enterUsername('standard_user');
            loginAction.enterPassword('secret_sauce');
            loginAction.clickLoginButton();
        });
    checkoutData.forEach((data)=>{
        it(`${data.case}`,()=>{
            data.products.forEach((productName) => {
                productAction.addProductToCart(productName);
            });
            productAction.goToCart();
            cartAction.ClickCheckout();
            coInfoVerif.shouldDisplayCoForm();
            coInfoAction.enterFirstname(data.firstname);
            coInfoAction.enterLastname(data.lastname);
            coInfoAction.enterAdress(data.postalCode);
            coInfoAction.clickContinue();
           

            if (data.expectedError) {
                coInfoVerif.shouldShowError(data.expectedError);
            } 
            else{
                coOverviewVerif.verifyAllProducts(data.products);
                coOverviewVerif.ShouldShowAllItemDetail();
                coOverviewVerif.shouldShowPaymenInfo();
                coOverviewVerif.shouldShowShippingInfo();
                coOverviewAction.clickFinish();
                coCompleteVerif.verifCoComplete(); 
            }
             
        })
    })

    
    
});