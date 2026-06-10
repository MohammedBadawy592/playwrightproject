# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logout.spec.ts >> user logout test
- Location: tests\Logout.spec.ts:27:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[class="btn btn-primary"]')

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
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
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
            - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
        - listitem [ref=e76]:
          - link "Logout" [ref=e77] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/logout&language=en-gb
      - generic [ref=e78]:
        - generic [ref=e79]:
          - heading "Account Logout" [level=1] [ref=e80]
          - paragraph [ref=e81]: You have been logged off your account. It is now safe to leave the computer.
          - paragraph [ref=e82]: Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.
          - link "Continue" [ref=e84] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - complementary [ref=e85]:
          - generic [ref=e86]:
            - link "Login" [ref=e87] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/login&language=en-gb
            - link "Register" [ref=e88] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/register&language=en-gb
            - link "Forgotten Password" [ref=e89] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/forgotten&language=en-gb
            - link "My Account" [ref=e90] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
            - link "Payment Methods" [ref=e91] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb
            - link "Address Book" [ref=e92] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb
            - link "Wish List" [ref=e93] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
            - link "Order History" [ref=e94] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
            - link "Downloads" [ref=e95] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb
            - link "Subscriptions" [ref=e96] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb
            - link "Reward Points" [ref=e97] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb
            - link "Returns" [ref=e98] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb
            - link "Transactions" [ref=e99] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb
            - link "Newsletter" [ref=e100] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
  - contentinfo [ref=e101]:
    - generic [ref=e102]:
      - generic [ref=e103]:
        - generic [ref=e104]:
          - heading "Information" [level=5] [ref=e105]
          - list [ref=e106]:
            - listitem [ref=e107]:
              - link "Terms & Conditions" [ref=e108] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=2
            - listitem [ref=e109]:
              - link "Delivery Information" [ref=e110] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=4
            - listitem [ref=e111]:
              - link "About Us" [ref=e112] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=1
            - listitem [ref=e113]:
              - link "Privacy Policy" [ref=e114] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=3
        - generic [ref=e115]:
          - heading "Customer Service" [level=5] [ref=e116]
          - list [ref=e117]:
            - listitem [ref=e118]:
              - link "Contact Us" [ref=e119] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - listitem [ref=e120]:
              - link "Returns" [ref=e121] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns.add&language=en-gb
            - listitem [ref=e122]:
              - link "Site Map" [ref=e123] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap&language=en-gb
        - generic [ref=e124]:
          - heading "Extras" [level=5] [ref=e125]
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "Brands" [ref=e128] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer&language=en-gb
            - listitem [ref=e129]:
              - link "Affiliate" [ref=e130] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb
            - listitem [ref=e131]:
              - link "Specials" [ref=e132] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special&language=en-gb
        - generic [ref=e133]:
          - heading "My Account" [level=5] [ref=e134]
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "My Account" [ref=e137] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
            - listitem [ref=e138]:
              - link "Order History" [ref=e139] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
            - listitem [ref=e140]:
              - link "Wish List" [ref=e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
            - listitem [ref=e142]:
              - link "Newsletter" [ref=e143] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
      - separator [ref=e144]
      - paragraph [ref=e145]:
        - text: Powered By
        - link "OpenCart" [ref=e146] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1  | import {expect,Locator,Page}from "@playwright/test"
  2  | 
  3  | export class LoginPage{
  4  |     private readonly page:Page;
  5  |     private readonly txtEmail:Locator;
  6  |     private readonly txtPassword:Locator;
  7  |     private readonly btnLogin:Locator;
  8  |     private readonly errormsg:Locator;
  9  | 
  10 | 
  11 |     constructor(page:Page){
  12 |         this.page=page;
  13 |         this.txtEmail=page.locator('#input-email');
  14 |         this.txtPassword=page.locator('#input-password');
  15 |         this.btnLogin=page.locator('button[class="btn btn-primary"]');
  16 |         this.errormsg=page.locator('.alert.alert-danger.alert-dismissible');
  17 | 
  18 |     }
  19 |     
  20 | 
  21 |     
  22 |     async setEmail(Email:string){
  23 |         await this.txtEmail.fill(Email);
  24 |     }
  25 |     async setPassword(password:string){
  26 |         await this.txtPassword.fill(password);
  27 |     }
  28 |   
  29 |     async clickContinue(){
> 30 |         await this.btnLogin.click();
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  31 |     }
  32 |     async geterrormsg(){
  33 |         return await this.errormsg.textContent() ?? '';
  34 |     }
  35 |     
  36 |     async completeLogin(email:string,password:string){
  37 |         await this.setEmail(email);
  38 |         await this.setPassword(password);
  39 |         await this.clickContinue();
  40 | 
  41 |     }
  42 | }
```