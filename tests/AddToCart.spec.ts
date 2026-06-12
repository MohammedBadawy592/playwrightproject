import { test, expect } from '@playwright/test';
import {HomePage } from '../pages/HomePage';
import {LoginPage } from '../pages/LoginPage';
import {SearchResultPage } from '../pages/SearchResultPage';
import {ProductPage } from '../pages/ProductPage';

import {RandomData } from '../utils/Randomdatagenrator';
import {TestConfig } from '../test.config';
let homepage:HomePage;
let loginPage:LoginPage;
 let config: TestConfig;
 let Search:SearchResultPage;
 let productpage:ProductPage;

test.beforeEach(async({page})=>{
 config=new TestConfig();
  await page.goto(config.appUrl)
    homepage=new HomePage(page);
    loginPage=new LoginPage(page);  
    Search=new SearchResultPage(page);  
    productpage=new ProductPage(page);  
}) 

test.afterEach(async ({page})=>{
    await page.close();
})
test('user Add to cart test', async ({ page }) => {
/* * Steps:
 * 1. Navigate to application URL
 * 2. Enter an existing product name in the search box
 * 3. Click the search button
 * 4. Verify the product appears in the search results
 * 5. Select the product
 * 6. Set quantity
 * 7. Add the product to the cart
 * 8. Verify the success message
 */

await homepage.enterProductName(config.productName)
await homepage.clickSearch();
expect(await Search.IsProductExist(config.productName)).toBeTruthy();
expect(await Search.IsSearchResultExist()).toBeTruthy();
await Search.selectProduct(config.productName);

await productpage.setQuantity("3");
await productpage.addToCart();
await productpage.isConsMsgVisible();

})