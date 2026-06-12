# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests\E2E.spec.ts:16:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - list [ref=e6]:
        - listitem [ref=e7]:
          - link "$ Currency " [ref=e10] [cursor=pointer]:
            - /url: "#"
            - strong [ref=e11]: $
            - text: Currency
            - generic [ref=e12]: 
        - listitem
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link " 123456789" [ref=e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - generic [ref=e17]: 
            - text: "123456789"
        - listitem [ref=e18]:
          - link " My Account " [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
            - text: My Account
            - generic [ref=e22]: 
        - listitem [ref=e23]:
          - link " Wish List (0)" [ref=e24] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - generic [ref=e25]: 
            - text: Wish List (0)
        - listitem [ref=e26]:
          - link " Shopping Cart" [ref=e27] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart&language=en-gb
            - generic [ref=e28]: 
            - text: Shopping Cart
        - listitem [ref=e29]:
          - link " Checkout" [ref=e30] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout&language=en-gb
            - generic [ref=e31]: 
            - text: Checkout
  - banner [ref=e32]:
    - generic [ref=e34]:
      - link "Your Store" [ref=e37] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - img "Your Store" [ref=e38]
      - generic [ref=e40]:
        - textbox "Search" [ref=e41]
        - button "" [ref=e42] [cursor=pointer]:
          - generic [ref=e43]: 
      - button " 0 item(s) - $0.00" [ref=e46] [cursor=pointer]:
        - generic [ref=e47]: 
        - text: 0 item(s) - $0.00
  - main [ref=e48]:
    - navigation [ref=e50]:
      - text: 
      - list [ref=e52]:
        - listitem [ref=e53]:
          - link "Desktops" [ref=e54] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=20
        - listitem [ref=e55]:
          - link "Laptops & Notebooks" [ref=e56] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=18
        - listitem [ref=e57]:
          - link "Components" [ref=e58] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=25
        - listitem [ref=e59]:
          - link "Tablets" [ref=e60] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=57
        - listitem [ref=e61]:
          - link "Software" [ref=e62] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=17
        - listitem [ref=e63]:
          - link "Phones & PDAs" [ref=e64] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=24
        - listitem [ref=e65]:
          - link "Cameras" [ref=e66] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=33
        - listitem [ref=e67]:
          - link "MP3 Players" [ref=e68] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=34
    - generic [ref=e69]:
      - list [ref=e70]:
        - listitem [ref=e71]:
          - link "" [ref=e72] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
            - generic [ref=e73]: 
        - listitem [ref=e74]:
          - link "Account" [ref=e75] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb&customer_token=5865928f89c71954c7c413458f
      - generic [ref=e76]:
        - generic [ref=e77]:
          - heading "My Account" [level=1] [ref=e78]
          - list [ref=e79]:
            - listitem [ref=e80]:
              - link "Edit your account information" [ref=e81] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/edit&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e82]:
              - link "Change your password" [ref=e83] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/password&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e84]:
              - link "Stored payment methods" [ref=e85] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e86]:
              - link "Modify your address book entries" [ref=e87] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e88]:
              - link "Modify your wish list" [ref=e89] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=5865928f89c71954c7c413458f
          - heading "My Orders" [level=2] [ref=e90]
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "View your order history" [ref=e93] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e94]:
              - link "Subscriptions" [ref=e95] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e96]:
              - link "Downloads" [ref=e97] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e98]:
              - link "Your Reward Points" [ref=e99] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e100]:
              - link "View your return requests" [ref=e101] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e102]:
              - link "Your Transactions" [ref=e103] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb&customer_token=5865928f89c71954c7c413458f
          - heading "My Affiliate Account" [level=2] [ref=e104]
          - list [ref=e105]:
            - listitem [ref=e106]:
              - link "Register for an affiliate account" [ref=e107] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb&customer_token=5865928f89c71954c7c413458f
          - heading "Newsletter" [level=2] [ref=e108]
          - list [ref=e109]:
            - listitem [ref=e110]:
              - link "Subscribe / unsubscribe to newsletter" [ref=e111] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb&customer_token=5865928f89c71954c7c413458f
        - complementary [ref=e112]:
          - generic [ref=e113]:
            - link "My Account" [ref=e114] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Edit Account" [ref=e115] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/edit&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Password" [ref=e116] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/password&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Payment Methods" [ref=e117] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Address Book" [ref=e118] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Wish List" [ref=e119] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Order History" [ref=e120] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Downloads" [ref=e121] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Subscriptions" [ref=e122] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Reward Points" [ref=e123] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Returns" [ref=e124] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Transactions" [ref=e125] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Newsletter" [ref=e126] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - link "Logout" [ref=e127] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/logout&language=en-gb
  - contentinfo [ref=e128]:
    - generic [ref=e129]:
      - generic [ref=e130]:
        - generic [ref=e131]:
          - heading "Information" [level=5] [ref=e132]
          - list [ref=e133]:
            - listitem [ref=e134]:
              - link "Terms & Conditions" [ref=e135] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=2
            - listitem [ref=e136]:
              - link "Delivery Information" [ref=e137] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=4
            - listitem [ref=e138]:
              - link "About Us" [ref=e139] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=1
            - listitem [ref=e140]:
              - link "Privacy Policy" [ref=e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=3
        - generic [ref=e142]:
          - heading "Customer Service" [level=5] [ref=e143]
          - list [ref=e144]:
            - listitem [ref=e145]:
              - link "Contact Us" [ref=e146] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - listitem [ref=e147]:
              - link "Returns" [ref=e148] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns.add&language=en-gb
            - listitem [ref=e149]:
              - link "Site Map" [ref=e150] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap&language=en-gb
        - generic [ref=e151]:
          - heading "Extras" [level=5] [ref=e152]
          - list [ref=e153]:
            - listitem [ref=e154]:
              - link "Brands" [ref=e155] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer&language=en-gb
            - listitem [ref=e156]:
              - link "Affiliate" [ref=e157] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e158]:
              - link "Specials" [ref=e159] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special&language=en-gb&customer_token=5865928f89c71954c7c413458f
        - generic [ref=e160]:
          - heading "My Account" [level=5] [ref=e161]
          - list [ref=e162]:
            - listitem [ref=e163]:
              - link "My Account" [ref=e164] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e165]:
              - link "Order History" [ref=e166] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e167]:
              - link "Wish List" [ref=e168] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb&customer_token=5865928f89c71954c7c413458f
            - listitem [ref=e169]:
              - link "Newsletter" [ref=e170] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb&customer_token=5865928f89c71954c7c413458f
      - separator [ref=e171]
      - paragraph [ref=e172]:
        - text: Powered By
        - link "OpenCart" [ref=e173] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1  | import{test,expect,Page} from '@playwright/test';
  2  | import { RegistrationPage } from '../pages/RegistrationPage';
  3  | import { HomePage } from '../pages/HomePage';
  4  | import { RandomData } from '../utils/Randomdatagenrator';
  5  | import { TestConfig } from '../test.config';
  6  | import { LogoutPage } from '../pages/LogoutPage';
  7  | import { LoginPage } from '../pages/LoginPage';
  8  | import { MyAccountPage } from '../pages/MyAccountPage';
  9  | import { SearchResultPage } from '../pages/SearchResultPage';
  10 | import { ProductPage } from '../pages/ProductPage';
  11 | import { ShoppingCartPage } from '../pages/ShopingCartPage';
  12 | // import { CheckoutPage } from '../pages/CheckOutPage';
  13 | //1) Register a new account
  14 | let regpassword:string;
  15 | let regemail:string;
  16 | test('execute end-to-end test flow @end-to-end', async ({ page }) => {
  17 | const config =new TestConfig();
  18 | await page.goto(config.appUrl);
  19 | await performRegistration(page);
  20 | await performLogout(page);
  21 | await performLogin(page,regemail,regpassword);
  22 | await addProductTocart(page);
  23 | await verifyShoppingCart(page)
  24 | 
  25 | 
  26 | }); 
  27 | 
  28 | 
  29 | 
  30 | async function performRegistration(page:Page){
  31 | const homePage=new HomePage(page);
  32 | await homePage.clickMyAccount();
  33 | await homePage.ClickRegistration();
  34 | const registrationPage= new RegistrationPage(page);
  35 | await registrationPage.setFirstName(RandomData.getFirstName());
  36 | await registrationPage.setLastName(RandomData.getLastName());
  37 | regemail=RandomData.getEmail();
  38 | await registrationPage.setEmail(regemail);
  39 | regpassword=RandomData.getPassword();
  40 | await registrationPage.setPassword(regpassword);
  41 | await registrationPage.setPrivacyPolicy();
  42 | await registrationPage.clickContinue();
  43 | const conmsg=await registrationPage.getConfirmationmsg();
  44 | expect(conmsg).toContain('Your Account Has Been Created!');
  45 | }
  46 | //* 2) Logout after registration
  47 | 
  48 | async function performLogout(page:Page){
  49 |  const myAccountPage= new MyAccountPage(page);
  50 |  await myAccountPage.clickLogout();
  51 |  const  logout=new LogoutPage(page); 
  52 |  expect(await logout.isContinueButtonVisible()).toBe(true);
  53 |  
  54 | }
  55 | //* 3) Login with the same account
  56 | async function performLogin(page:Page ,email:string,password:string){
  57 |  const config=new TestConfig();
  58 |  await page.goto(config.appUrl);
  59 |  const homePage=new HomePage(page);
  60 |  await homePage.clickMyAccount();
  61 |  await homePage.ClickLogin();
  62 |     const loginpage=new LoginPage(page);
  63 | 
  64 |  await loginpage.completeLogin(email,password)
  65 |  const myAccount=new MyAccountPage(page);
  66 |  expect(await myAccount.isMyAccountPageExists()).toBeTruthy()
  67 | 
  68 | }
  69 | //* 4) Search for a product and add it to the shopping cart
  70 | async function addProductTocart(page:Page) {
  71 |     const homepage=new HomePage(page);
  72 |     const config=new TestConfig()
  73 |     const productname=config.productName;
  74 |     const productquantaty=config.productQuantity;
  75 |     await homepage.enterProductName(productname);
  76 |     await homepage.clickSearch();
  77 |     const searchResultPage=new SearchResultPage(page);
> 78 |     expect(await searchResultPage.IsSearchResultExist()).toBeTruthy();
     |                                                          ^ Error: expect(received).toBeTruthy()
  79 |     expect(await searchResultPage.IsProductExist(productname)).toBeTruthy();
  80 |     const productPage=await searchResultPage.selectProduct(productname);
  81 |     await productPage?.setQuantity(productquantaty);
  82 |     await productPage?.addToCart();
  83 | 
  84 |     await page.waitForTimeout(3000); // Wait to simulate user delay
  85 | 
  86 |     expect(await productPage?.isConsMsgVisible()).toBe(true);
  87 | 
  88 | }
  89 | //* 5) Verify cart contents
  90 | async function verifyShoppingCart(page: Page) {
  91 |     const productPage=new ProductPage(page);
  92 |     await productPage.navToCart();
  93 |     const shoppingCartPage:ShoppingCartPage=await productPage.clickViewCArt();
  94 |     console.log("nav to cart");
  95 |     const config=new TestConfig();
  96 | }
  97 | //* 6) Attempt checkout (disabled since feature isn't available on demo site)
  98 | 
```