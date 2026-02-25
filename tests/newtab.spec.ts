import { expect,test } from "@playwright/test";
import { newcontext } from "../pages/Newtab";
import { compileFunction } from "node:vm";
import { selectproduct } from "../pages/selectproduct";
import { config } from "../DEMOQA.config";

test (`@Web new tab focus`, async({page})=>{

    const newpage = new selectproduct(page);

    // newpage.newtabnavigate();
    // newpage.newtab();

    await newpage.navigate1()
    await newpage.selectitem(config.item);
});


// test (`test`, async({browser})=>{

//     const context = await browser.newContext();
//     const page = await context.newPage();
//    await page.goto ("https://demoqa.com/browser-windows");


// const [newpage] = await Promise.all(
//     [
//         context.waitForEvent("page"),
//         page.locator ("#tabButton").click()
//     ]
// )
// const printvalue = await newpage.locator("#sampleHeading").textContent();
// await console.log(printvalue);
        
    


// })

