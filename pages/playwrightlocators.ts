import { expect,Locator,Page } from "@playwright/test";

//getbyrole
//get by text 
//get by label
//.filter
//presssequence


class playwrightlocators {

    private login : Locator;

    constructor (private page: Page){
        this.page = page;
        this.login = page.getByRole("button",{name:"Login"})
    }

   async navigate(){
    await this.page.goto("https://demoqa.com/books");
   }

    async getbyrole() {
      const p1=  await this.login.textContent();
      console.log (p1);

      return;

    }

    async getbytext(){
        await this.page.getByText('Learning JavaScript Design Patterns').isVisible();
    }

    async getbylabel(){
          await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
          await this.page.getByText("Protractor Tutorial").last().waitFor();
          await this.page.getByLabel("Employed").check();   
                                                                                     
    }
}


export{playwrightlocators};