import { test, expect } from '@playwright/test';
import {HomePage } from '../pages/HomePage';
import {RegistrationPage } from '../pages/RegistrationPage';

import {RandomData } from '../utils/Randomdatagenrator';
import {TestConfig } from '../test.config';
let homepage:HomePage;
let registrationpage:RegistrationPage;

test.beforeEach(async({page})=>{
const config=new TestConfig();
  await page.goto(config.appUrl)
    homepage=new HomePage(page);
    registrationpage=new RegistrationPage(page);  
}) 

test.afterEach(async ({page})=>{
    await page.close();
})
test('user registration test', async ({ page }) => {
  
  await homepage.clickMyAccount() ;  
  await homepage.ClickRegistration();
  await registrationpage.setFirstName(RandomData.getFirstName());
  await registrationpage.setLastName(RandomData.getLastName());
  await registrationpage.setPassword(RandomData.getPassword());
  await registrationpage.setEmail(RandomData.getEmail());
  await registrationpage.setPrivacyPolicy();
  await registrationpage.clickContinue();
  const conmsg=await registrationpage.getConfirmationmsg();
  expect(conmsg).toContain('Your Account Has Been Created');
    await page.waitForTimeout(3000); 

});
