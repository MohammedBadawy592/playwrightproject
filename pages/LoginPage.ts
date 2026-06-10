import {expect,Locator,Page}from "@playwright/test"

export class LoginPage{
    private readonly page:Page;
    private readonly txtEmail:Locator;
    private readonly txtPassword:Locator;
    private readonly btnLogin:Locator;
    private readonly errormsg:Locator;


    constructor(page:Page){
        this.page=page;
        this.txtEmail=page.locator('#input-email');
        this.txtPassword=page.locator('#input-password');
        this.btnLogin=page.locator('button[class="btn btn-primary"]');
        this.errormsg=page.locator('.alert.alert-danger.alert-dismissible');

    }
    

    
    async setEmail(Email:string){
        await this.txtEmail.fill(Email);
    }
    async setPassword(password:string){
        await this.txtPassword.fill(password);
    }
  
    async clickContinue(){
        await this.btnLogin.click();
    }
    async geterrormsg(){
        return await this.errormsg.textContent() ?? '';
    }
    
    async completeLogin(email:string,password:string){
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickContinue();

    }
}