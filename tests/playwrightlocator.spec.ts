import { expect, test } from "@playwright/test";
import { playwrightlocators } from "../pages/playwrightlocators";


test (`@Sanity locator`, async({page})=>{
    const locators = new playwrightlocators (page);
    await locators.navigate();
    await locators.getbyrole();
    await locators.getbytext();
    await locators.getbylabel();
    await page.pause();
    
 
})