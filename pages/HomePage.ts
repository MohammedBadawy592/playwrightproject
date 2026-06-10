import {expect,Page,Locator} from "@playwright/test"

export class HomePage{
private readonly page:Page;
private readonly lnkMyAccount:Locator;
private readonly lnkRegister:Locator;
private readonly lnkLogin:Locator;
private readonly txtSearchBox:Locator;
private readonly btnSearch:Locator;

////a[@class="dropdown-item"][normalize-space()="Login"]
    constructor(page:Page){
        this.page=page;
        this.lnkLogin=page.locator('li>a:has-text("Login")')
        this.lnkRegister=page.locator('.dropdown li>a:has-text("Register")')
        this.lnkMyAccount=page.locator("span:has-text('My Account')")
        this.txtSearchBox=page.locator('input[placeholder="Search"]')
        this.btnSearch=page.locator("button[type='submit']").first();
    }

    async isHomePageExist(){
        let title:string =await this.page.title();
        if(title)
        {return true}
    
        return false;
        }
async clickMyAccount(){
    try{
            await this.lnkMyAccount.click();
    }catch(error){
        console.log(error)
        throw error;
    }
}
async ClickRegistration(){
    try{
            await this.lnkRegister.click();
    }catch(error){
        console.log(error)
        throw error;
    }
}
async ClickLogin(){
    try{
            await this.lnkLogin.click();
    }catch(error){
        console.log(error)
        throw error;
    }
}
async enterProductName(pName:string){
    try{
            await this.txtSearchBox.fill(pName);
    }catch(error){
        console.log(error)
        throw error;
    }
}

async clickSearch(){
    try{
            await this.btnSearch.click();
    }catch(error){
        console.log(error)
        throw error;
    }
}

}   