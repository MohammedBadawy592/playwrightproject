import { test, expect } from '@playwright/test';
import {HomePage } from '../pages/HomePage';
import {LoginPage, } from '../pages/LoginPage';

import {RandomData } from '../utils/Randomdatagenrator';
import {TestConfig } from '../test.config';
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
test('user login test', async ({ page }) => {
  await homepage.clickMyAccount();
  await homepage.ClickLogin();
  await loginPage.completeLogin(config.email,config.password);
  await expect(page.locator('div[id="content"] h1')).toBeVisible();

});
