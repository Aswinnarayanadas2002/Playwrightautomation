import { expect, Page} from "@playwright/test";



class newcontext {
    constructor (private page :Page){

    }

    async newtabnavigate (){
        await this.page.goto ("https://demoqa.com/browser-windows");
    }

    async newtab(){

    
       
        const [newtab] = await Promise.all([ 
         this.page.context().waitForEvent('page'),
         this.page.locator ("#tabButton").click()

        ]);
        

        const println = await newtab.locator("#sampleHeading").textContent();
        await console.log(println);
        return println;
    }

};

export {newcontext};

