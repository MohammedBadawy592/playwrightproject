import{test,expect,Page} from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { HomePage } from '../pages/HomePage';
import { RandomData } from '../utils/Randomdatagenrator';
import { TestConfig } from '../test.config';
import { LogoutPage } from '../pages/LogoutPage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { SearchResultPage } from '../pages/SearchResultPage';
import { ProductPage } from '../pages/ProductPage';
import { ShoppingCartPage } from '../pages/ShopingCartPage';
// import { CheckoutPage } from '../pages/CheckOutPage';
//1) Register a new account
let regpassword:string;
let regemail:string;
test('execute end-to-end test flow @end-to-end', async ({ page }) => {
const config =new TestConfig();
await page.goto(config.appUrl);
await performRegistration(page);
await performLogout(page);
await performLogin(page,regemail,regpassword);
    await page.waitForTimeout(3000); // Wait to simulate user delay

await addProductTocart(page);
await verifyShoppingCart(page)


}); 



async function performRegistration(page:Page){
const homePage=new HomePage(page);
await homePage.clickMyAccount();
await homePage.ClickRegistration();
const registrationPage= new RegistrationPage(page);
await registrationPage.setFirstName(RandomData.getFirstName());
await registrationPage.setLastName(RandomData.getLastName());
regemail=RandomData.getEmail();
await registrationPage.setEmail(regemail);
regpassword=RandomData.getPassword();
await registrationPage.setPassword(regpassword);
await registrationPage.setPrivacyPolicy();
await registrationPage.clickContinue();
const conmsg=await registrationPage.getConfirmationmsg();
expect(conmsg).toContain('Your Account Has Been Created!');
}
//* 2) Logout after registration

async function performLogout(page:Page){
 const myAccountPage= new MyAccountPage(page);
 await myAccountPage.clickLogout();
 const  logout=new LogoutPage(page); 
 expect(await logout.isContinueButtonVisible()).toBe(true);
 
}
//* 3) Login with the same account
async function performLogin(page:Page ,email:string,password:string){
 const config=new TestConfig();
 await page.goto(config.appUrl);
 const homePage=new HomePage(page);
 await homePage.clickMyAccount();
 await homePage.ClickLogin();
    const loginpage=new LoginPage(page);

 await loginpage.completeLogin(email,password)
 const myAccount=new MyAccountPage(page);
 expect(await myAccount.isMyAccountPageExists()).toBeTruthy()

}
//* 4) Search for a product and add it to the shopping cart
async function addProductTocart(page:Page) {
    const homepage=new HomePage(page);
    const config=new TestConfig()
    const productname=config.productName;
    const productquantaty=config.productQuantity;
    await homepage.enterProductName(productname);
    await homepage.clickSearch();
    const searchResultPage=new SearchResultPage(page);
    expect(await searchResultPage.IsSearchResultExist()).toBeTruthy();
    expect(await searchResultPage.IsProductExist(productname)).toBeTruthy();
    const productPage=await searchResultPage.selectProduct(productname);
    await productPage?.setQuantity(productquantaty);
    await productPage?.addToCart();

    await page.waitForTimeout(3000); // Wait to simulate user delay

    expect(await productPage?.isConsMsgVisible()).toBe(true);

}
//* 5) Verify cart contents
async function verifyShoppingCart(page: Page) {
    const productPage=new ProductPage(page);
    await productPage.navToCart();
    const shoppingCartPage:ShoppingCartPage=await productPage.clickViewCArt();
    console.log("nav to cart");
    const config=new TestConfig();
}
//* 6) Attempt checkout (disabled since feature isn't available on demo site)
