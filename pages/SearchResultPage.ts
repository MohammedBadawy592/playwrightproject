import {expect,Locator,Page}from "@playwright/test"
import {ProductPage} from './ProductPage'
export class SearchResultPage{
    private readonly page:Page
    private readonly searchPageHeader:Locator
    private readonly searchProducts:Locator
    constructor(page:Page){
        this.page=page;
        this.searchPageHeader=page.locator('#content h1');
        this.searchProducts=page.locator('h4>a');

    }

    async IsSearchResultExist():Promise<boolean>{
        try{

            const headertxt=await this.searchPageHeader.textContent();
            return headertxt?.includes('Search -')??false; 
        }catch(error){
            console.log(error)
            return false
        }

    }
    async IsProductExist(productname:string):Promise<boolean>{
        try{
            const count = await this.searchProducts.count();
            for(let i=0;i<count;i++){
                const productTitle= this.searchProducts.nth(i);
                    if(await productTitle.textContent() ===productname)
                        return true
            }
            
        }catch(error){
            console.log(error)
        }
        return false

    }

    async selectProduct(productname:string):Promise<ProductPage|null>{
        try{
            const count = await this.searchProducts.count();
            for(let i=0;i<count;i++){
                const productTitle= this.searchProducts.nth(i);
                    if(await productTitle.textContent() ===productname)
                           await productTitle.click();
                        return new ProductPage(this.page);
            }
            
        }catch(error){
            console.log(error)
        }
        return null

    }



    
}