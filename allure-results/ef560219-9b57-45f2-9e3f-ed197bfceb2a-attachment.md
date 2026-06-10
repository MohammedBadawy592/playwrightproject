# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDDT.spec.ts >> login test with json data: Valid login
- Location: tests\LoginDDT.spec.ts:28:9

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
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
  32 |               if(data.expected.toLowerCase()==='success'){
  33 |                 const myAccountPage=new MyAccountPage(page);
  34 |                 const islogged=await myAccountPage.isMyAccountPageExists();
> 35 |                 expect(islogged).toBeTruthy();
     |                                  ^ Error: expect(received).toBeTruthy()
  36 |               }
  37 |               else{
  38 |                 const errormsg=await loginPage.geterrormsg();
  39 |                 expect(errormsg).toBe(' Warning: No match for E-Mail Address and/or Password.');
  40 |               }
  41 |     });
  42 | }
```