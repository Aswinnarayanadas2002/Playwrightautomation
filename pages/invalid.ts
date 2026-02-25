import { test, expect, Page } from "@playwright/test";
import { inputfield } from "./formsubmission";
import { config } from "../DEMOQA.config";
import { data } from "../testData/testData";
class invalid {
   constructor (private page : Page){
   }
// expect(nameerror).toHaveCSS ('border-color', 'rgb(220, 53, 69)');

   async erromessage(FirstName :string , LastName : string , MobileNumber : string){
   const nameerror = await this.page.locator("#firstName");
   expect(nameerror).toHaveCSS('border-color', 'rgb(220, 53, 69)');
   
    const invalidscenario = new inputfield (this.page);
   await invalidscenario.name(FirstName);
   await invalidscenario.name1(LastName);
   await invalidscenario.gender();
   await invalidscenario.number(MobileNumber);

   
    }

   


};

export{invalid};