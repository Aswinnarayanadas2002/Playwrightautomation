import { expect, Expect,Page } from "@playwright/test";
import { data } from "../testData/testData";
import { Config } from "@playwright/test";
import { config } from "node:process";



class inputfield {
    constructor (private page : Page){
        this.page = page;
        
    }

    
    async name (FirstName : string){
        await this.page.locator ("#firstName").fill(FirstName);
    }
    async name1 (LastName : string){
        await this.page.locator ("#lastName").fill (LastName);
    }

    async email (Email : string){
        await this.page.getByPlaceholder ("name@example.com").fill (Email);
    }

    async gender (){
        await this.page.locator (".custom-control-label").nth(0).click();
    }

   async number (MobileNumber : string ){
    await this.page.getByPlaceholder ("Mobile Number").fill (MobileNumber);
   }
   
   async subject (Subjects : string){
    const key = await this.page.locator (".subjects-auto-complete__value-container");
   await key.click();
    await this.page.keyboard.type(Subjects);
    
   }
   async navigate(){
        
        await this.page.goto("https://demoqa.com/automation-practice-form");
        
    }


   async hobbies (){
    await this.page.locator ('//label[@for="hobbies-checkbox-2"]').click();
    await this.page.locator ('//label[@for="hobbies-checkbox-3"]').click();
   }
   
   async selectpicture (){
    await this.page.locator ("#uploadPicture").setInputFiles("/home/me/Videos/download1.png")
   }

   async address (CurrentAddress : string){
     await this.page.getByPlaceholder("Current Address").fill(CurrentAddress);
   }
   async state (){
    await this.page.locator('//div[text()="Select State"]').click();
    await this.page.locator('//div[text()="Uttar Pradesh"]').click();
   }


   async city (){
   await this.page.locator('//div[text()="Select City"]').click();
   await this.page.locator('//div[text()="Lucknow"]').click();
   }

   async submit (){
    await this.page.locator("#submit").click();
   }

   async close (){
    await this.page.locator("#closeLargeModal").click;
   }
   



   //datepicker
   async clendearselect (Year:string, Month: string){
    
     await this.page.locator("#dateOfBirthInput").click ()

    while (true) {
     
      const x = this.page.locator(".react-datepicker__current-month");
        const text = await x.textContent();
       
        const value = text?.includes(Month);
       

        if (value){
            
            break;
        }

        await this.page.locator(".react-datepicker__navigation--next").click();
     
    }
  
      const y = this.page.locator(".react-datepicker__current-month");
      const year = await y.textContent();
      const compare = year?.includes(Year);

      if (!compare){

      await this.page.locator(".react-datepicker__year-select").selectOption("2002");
     
      }
      
      await this.page.locator(".react-datepicker__day--017:not(.react-datepicker__day--outside-month)").click();
      



   }
};
 export{inputfield};