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
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('button[class="btn btn-primary"]')

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
     |                             ^ Error: locator.click: Target page, context or browser has been closed
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