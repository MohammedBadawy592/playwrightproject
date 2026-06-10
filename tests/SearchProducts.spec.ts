import { test, expect } from '@playwright/test';
import {HomePage } from '../pages/HomePage';
import {LoginPage } from '../pages/LoginPage';
import {SearchResultPage } from '../pages/SearchResultPage';

import {RandomData } from '../utils/Randomdatagenrator';
import {TestConfig } from '../test.config';
let homepage:HomePage;
let loginPage:LoginPage;
 let config: TestConfig;
let searchProduct:SearchResultPage;
test.beforeEach(async({page})=>{
 config=new TestConfig();
  await page.goto(config.appUrl)
    homepage=new HomePage(page);
    loginPage=new LoginPage(page);  
    searchProduct=new SearchResultPage(page);
}) 

test.afterEach(async ({page})=>{
    await page.close();
})
test('user Search test', async ({ page }) => {
  await homepage.clickMyAccount();
  await homepage.ClickLogin();
  await loginPage.completeLogin(config.email,config.password);
  await expect(page.locator('div[id="content"] h1')).toBeVisible();

const Productname=config.productName;
await homepage.enterProductName(Productname)
await homepage.clickSearch();
expect(await searchProduct.IsSearchResultExist()).toBeTruthy();
const Productfound=await searchProduct.IsProductExist(Productname);
expect(Productfound).toBeTruthy();
})