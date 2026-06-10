# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDDT.spec.ts >> login test with json data: Invalid login
- Location: tests\LoginDDT.spec.ts:28:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div[id="content"] h1')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('div[id="content"] h1')

```

```yaml
- text: " Warning: No match for E-Mail Address and/or Password."
- button
- navigation:
  - list:
    - listitem:
      - link "$ Currency ":
        - /url: "#"
        - strong: $
        - text: Currency 
    - listitem
  - list:
    - listitem:
      - link " 123456789":
        - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
    - listitem:
      - link " My Account ":
        - /url: "#"
    - listitem:
      - link " Wish List (0)":
        - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
    - listitem:
      - link " Shopping Cart":
        - /url: http://localhost/opencart/upload/index.php?route=checkout/cart&language=en-gb
    - listitem:
      - link " Checkout":
        - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout&language=en-gb
- banner:
  - link "Your Store":
    - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
    - img "Your Store"
  - textbox "Search"
  - button ""
  - button " 0 item(s) - $0.00"
- main:
  - navigation:
    - list:
      - listitem:
        - link "Desktops":
          - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=20
      - listitem:
        - link "Laptops & Notebooks":
          - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=18
      - listitem:
        - link "Components":
          - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=25
      - listitem:
        - link "Tablets":
          - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=57
      - listitem:
        - link "Software":
          - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=17
      - listitem:
        - link "Phones & PDAs":
          - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=24
      - listitem:
        - link "Cameras":
          - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=33
      - listitem:
        - link "MP3 Players":
          - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=34
  - list:
    - listitem:
      - link "":
        - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
    - listitem:
      - link "Account":
        - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
    - listitem:
      - link "Login":
        - /url: http://localhost/opencart/upload/index.php?route=account/login&language=en-gb
  - heading "New Customer" [level=2]
  - paragraph:
    - strong: Register Account
  - paragraph: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
  - link "Continue":
    - /url: http://localhost/opencart/upload/index.php?route=account/register&language=en-gb
  - heading "Returning Customer" [level=2]
  - paragraph:
    - strong: I am a returning customer
  - text: E-Mail Address
  - textbox "E-Mail Address": abcxyz@xyz.com
  - text: Password
  - textbox "Password": abcxyx
  - link "Forgotten Password":
    - /url: http://localhost/opencart/upload/index.php?route=account/forgotten&language=en-gb
  - button "Login"
  - complementary:
    - link "Login":
      - /url: http://localhost/opencart/upload/index.php?route=account/login&language=en-gb
    - link "Register":
      - /url: http://localhost/opencart/upload/index.php?route=account/register&language=en-gb
    - link "Forgotten Password":
      - /url: http://localhost/opencart/upload/index.php?route=account/forgotten&language=en-gb
    - link "My Account":
      - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
    - link "Payment Methods":
      - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb
    - link "Address Book":
      - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb
    - link "Wish List":
      - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
    - link "Order History":
      - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
    - link "Downloads":
      - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb
    - link "Subscriptions":
      - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb
    - link "Reward Points":
      - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb
    - link "Returns":
      - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb
    - link "Transactions":
      - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb
    - link "Newsletter":
      - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
- contentinfo:
  - heading "Information" [level=5]
  - list:
    - listitem:
      - link "Terms & Conditions":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=2
    - listitem:
      - link "Delivery Information":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=4
    - listitem:
      - link "About Us":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=1
    - listitem:
      - link "Privacy Policy":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=3
  - heading "Customer Service" [level=5]
  - list:
    - listitem:
      - link "Contact Us":
        - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
    - listitem:
      - link "Returns":
        - /url: http://localhost/opencart/upload/index.php?route=account/returns.add&language=en-gb
    - listitem:
      - link "Site Map":
        - /url: http://localhost/opencart/upload/index.php?route=information/sitemap&language=en-gb
  - heading "Extras" [level=5]
  - list:
    - listitem:
      - link "Brands":
        - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer&language=en-gb
    - listitem:
      - link "Affiliate":
        - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb
    - listitem:
      - link "Specials":
        - /url: http://localhost/opencart/upload/index.php?route=product/special&language=en-gb
  - heading "My Account" [level=5]
  - list:
    - listitem:
      - link "My Account":
        - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
    - listitem:
      - link "Order History":
        - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
    - listitem:
      - link "Wish List":
        - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
    - listitem:
      - link "Newsletter":
        - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
  - separator
  - paragraph:
    - text: Powered By
    - link "OpenCart":
      - /url: https://www.opencart.com
    - text: Your Store © 2026
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import {HomePage } from '../pages/HomePage';
  3  | import {LoginPage, } from '../pages/LoginPage';
  4  | 
  5  | import {RandomData } from '../utils/Randomdatagenrator';
  6  | import {DataProvider } from '../utils/dataProvider';
  7  | import {TestConfig } from '../test.config';
  8  | import { MyAccountPage } from '../pages/MyAccountPage';
  9  | 
  10 | const jsonpath="data/logindata.json";
  11 | const jsonTestData=DataProvider.getTestDataFromJson(jsonpath);
  12 | let homepage:HomePage;
  13 | let loginPage:LoginPage;
  14 |  let config: TestConfig;
  15 | 
  16 | test.beforeEach(async({page})=>{
  17 |  config=new TestConfig();
  18 |   await page.goto(config.appUrl)
  19 |     homepage=new HomePage(page);
  20 |     loginPage=new LoginPage(page);  
  21 | }) 
  22 | 
  23 | test.afterEach(async ({page})=>{
  24 |     await page.close();
  25 | })
  26 | for(const data of jsonTestData){
  27 | 
  28 |     test(`login test with json data: ${data.testName}`,async({page})=>{
  29 |              await homepage.clickMyAccount();
  30 |               await homepage.ClickLogin();
  31 |               await loginPage.completeLogin(data.email,data.password);
> 32 |               await expect(page.locator('div[id="content"] h1')).toBeVisible();
     |                                                                  ^ Error: expect(locator).toBeVisible() failed
  33 |               if(data.expected.toLowerCase()==='success'){
  34 |                 const myAccountPage=new MyAccountPage(page);
  35 |                 const islogged=await myAccountPage.isMyAccountPageExists();
  36 |                 expect(islogged).toBeTruthy();
  37 |               }
  38 |               else{
  39 |                 const errormsg=await loginPage.geterrormsg();
  40 |                 expect(errormsg).toBe(' Warning: No match for E-Mail Address and/or Password.');
  41 |               }
  42 |     });
  43 | }
```