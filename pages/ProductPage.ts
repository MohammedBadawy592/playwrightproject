import { Page, Locator, expect } from '@playwright/test';
import {ShoppingCartPage} from './ShopingCartPage'
export class ProductPage {
    private readonly page :Page
    private readonly txtQuantaty :Locator
    private readonly addToCartbtn :Locator
    private readonly btnItems :Locator
    private readonly viewCart :Locator
    private readonly conmsg :Locator



    constructor(page:Page){

            this.page=page;
            this.txtQuantaty=page.locator("#input-quantity")
            this.addToCartbtn=page.locator("#button-cart")
            this.btnItems=page.locator("#cart")
            this.conmsg=page.locator("#.alert.alert-success.alert-dismissible")
            this.viewCart=page.locator('#strong:has-text("View Cart")')
    }

    async setQuantity(qty :string) :Promise<void>{
        await this.txtQuantaty.fill(" ");
        await this.txtQuantaty.fill(qty);

    }
    async addToCart():Promise <void>{
        await   this.addToCartbtn.click();
    }
    async navToCart():Promise <void>{
        await   this.btnItems.click();
    }

    async isConsMsgVisible():Promise<boolean>{
        try{
            if(this.conmsg!=null)
            return true;
        else
            return false;
        }
        catch (error){
            console.log(error);
            return false;
        }
    }
    async clickViewCArt():Promise<ShoppingCartPage>{
        await this.btnItems.click()
        return new ShoppingCartPage(this.page);
    }

    
    async addProductToCArt(qty:string ):Promise <void>{
        await this.setQuantity(qty)
        await this.addToCart();
        await this.isConsMsgVisible();
    }
}