import { expect, Page } from "@playwright/test";
import { config } from "../DEMOQA.config";
import { waitForDebugger } from "node:inspector";

class selectproduct {
    constructor (private page : Page){

    };

    async navigate1 (){
        await this.page.goto("https://www.flipkart.com/search?q=i%20phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off");
    }

    async selectitem(item :string){
       const count = await this.page.locator(".RG5Slk").count();
       const chooseitem = await config.item;
       const location = await this.page.locator('div.jIjQ8S');
    
       await this.page.locator('div.jIjQ8S').first().waitFor()
     //  const println = location.locator(".RG5Slk").waitFor();

     for (let i=0 ; i<=count ; i++) {
        const location = await this.page.locator('div.jIjQ8S');
        const loop = await this.page.locator('div.jIjQ8S').locator(".RG5Slk").nth(i).textContent();

        if (loop === chooseitem){

          const [newtag1] = await Promise.all(
                
                [
                    this.page.context().waitForEvent('page'),
                    await  this.page.locator('div.jIjQ8S').locator(".RG5Slk").nth(i).click()
                ]


                


            );
         const checking = await  newtag1.locator('//div[text()="iPhone 16 Pro Max (Black Titanium, 256 GB)"]').nth(1).textContent();
        expect (config.item).toContain(checking);
        //  console.log(checking.textContent());
       // console.log (checking);
        break;
            

        }

     }

       

          


    };
    


}
export {selectproduct};