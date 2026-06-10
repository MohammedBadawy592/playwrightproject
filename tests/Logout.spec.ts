import { test, expect } from '@playwright/test';
import {HomePage } from '../pages/HomePage';
import {LoginPage } from '../pages/LoginPage';
import {LogoutPage} from '../pages/LogoutPage';
import {MyAccountPage} from '../pages/MyAccountPage';

import {RandomData } from '../utils/Randomdatagenrator';
import {TestConfig } from '../test.config';
let homepage:HomePage;
let loginPage:LoginPage;
 let config: TestConfig;
 let logout:LogoutPage;
 let myAccount:MyAccountPage;

test.beforeEach(async({page})=>{
 config=new TestConfig();
  await page.goto(config.appUrl)
    homepage=new HomePage(page);
   logout=new LogoutPage(page);
   myAccount=new MyAccountPage(page);
    loginPage=new LoginPage(page);  
}) 

// test.afterEach(async ({page})=>{
//     await page.close();
// })
test('user logout test', async ({ page }) => {
  await homepage.clickMyAccount();
  await homepage.ClickLogin();
  await loginPage.completeLogin(config.email,config.password);
  await expect(page.locator('div[id="content"] h1')).toBeVisible();
logout=await myAccount.clickLogout();
expect( await logout.isContinueButtonVisible()).toBe(true);
homepage=await logout.clickContinue();  
expect(await homepage.isHomePageExist()).toBe(true)



})