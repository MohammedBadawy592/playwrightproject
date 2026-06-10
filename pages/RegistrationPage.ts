import {expect,Locator,Page}from "@playwright/test"

export class RegistrationPage{
    private readonly page:Page;
    private readonly txtFirstName:Locator;
    private readonly txtLastName:Locator;
    private readonly txtEmail:Locator;
    private readonly txtPassword:Locator;
    private readonly checkPolicy:Locator;
    private readonly btnContinue:Locator;
    private readonly msaConfirmation:Locator;


    constructor(page:Page){
        this.page=page;
        this.txtFirstName=page.locator('#input-firstname');
        this.txtLastName=page.locator('#input-lastname');
        this.txtEmail=page.locator('#input-email');
        this.txtPassword=page.locator('#input-password');
        this.checkPolicy=page.locator("input[name='agree']");
        this.btnContinue=page.locator('button[class="btn btn-primary"]');
        this.msaConfirmation=page.locator('h1:has-text("Your Account Has Been Created!")');

    }
    async setFirstName(fname:string){
        await this.txtFirstName.fill(fname);
    }

    async setLastName(lname:string){
        await this.txtLastName.fill(lname);
    }
    async setEmail(Email:string){
        await this.txtEmail.fill(Email);
    }
    async setPassword(password:string){
        await this.txtPassword.fill(password);
    }
    async setPrivacyPolicy(){
        await this.checkPolicy.check();
    }
    async clickContinue(){
        await this.btnContinue.click();
    }
    async getConfirmationmsg(){
        return await this.msaConfirmation.textContent() ?? '';
    }
    
    async completeRegistration(userData:{
        firstName:string;
        lastName:string;
        email:string;
        password:string;
    }){
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setPassword(userData.password);
        await this.setPrivacyPolicy();
        await this.clickContinue();
        await expect(this.msaConfirmation).toBeVisible();

    }
}