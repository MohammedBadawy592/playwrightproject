import { test, expect } from '@playwright/test';
import {HomePage } from '../pages/HomePage';
import {LoginPage, } from '../pages/LoginPage';

import {RandomData } from '../utils/Randomdatagenrator';
import {DataProvider } from '../utils/dataProvider';
import {TestConfig } from '../test.config';
import { MyAccountPage } from '../pages/MyAccountPage';

const jsonpath="data/logindata.json";
const jsonTestData=DataProvider.getTestDataFromJson(jsonpath);
let homepage:HomePage;
let loginPage:LoginPage;
 let config: TestConfig;

test.beforeEach(async({page})=>{
 config=new TestConfig();
  await page.goto(config.appUrl)
    homepage=new HomePage(page);
    loginPage=new LoginPage(page);  
}) 

test.afterEach(async ({page})=>{
    await page.close();
})
for(const data of jsonTestData){

    test(`login test with json data: ${data.testName}`,async({page})=>{
             await homepage.clickMyAccount();
              await homepage.ClickLogin();
              await loginPage.completeLogin(data.email,data.password);
              if(data.expected.toLowerCase()==='success'){
                const myAccountPage=new MyAccountPage(page);
                const islogged=await myAccountPage.isMyAccountPageExists();
                expect(islogged).toBeTruthy();
              }
              else{
                const errormsg=await loginPage.geterrormsg();
                expect(errormsg).toMatch(' Warning: No match for E-Mail Address and/or Password.');
              }
    });
}