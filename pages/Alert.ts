import { expect, Page } from "@playwright/test";

class aleart {
    constructor (private page : Page){

    }


    async ClickButtontoseealert() {
       this.page.on("dialog", async dialog =>{
       expect (dialog.message()).toContain("You clicked a button");
       await dialog.accept();
       })
        
        await this.page.locator("#alertButton").first().click()

    
    }
    
     async alearnavigation(){
        await this.page.goto("https://demoqa.com/alerts")   
    }

    async Clickbuttonafter5second() {
       this.page.on("dialog", async dialog =>{
       expect (dialog.message()).toContain("This alert appeared after 5 seconds");
       await dialog.accept();
       })
        
        await this.page.locator("#timerAlertButton").first().click()

    
    }

    async Clickconfirmbox() {
       this.page.on("dialog", async dialog =>{
       expect (dialog.message()).toContain("Do you confirm action?");
       await dialog.dismiss();
       })
        
        await this.page.locator("#confirmButton").first().click()
    await expect (this.page.locator("#confirmResult")).toHaveText("You selected Cancel");
    

    
    }

    async Clickpromptbox() {
       this.page.on("dialog", async dialog =>{
       expect (dialog.message()).toContain("Please enter your name");
       await dialog.accept("Hi Aswin");

    
       
       })
        
        await this.page.locator("#promtButton").first().click()
        await this.page.waitForTimeout(3000);
    await expect (this.page.locator("#promptResult")).toHaveText("You entered Hi Aswin")
    }



   

    
}
export {aleart};