import {test, expect } from "@playwright/test";
import { data } from "../testData/testData";
import { inputfield } from "../pages/formsubmission";
import { invalid } from "../pages/invalid";
data.forEach((data,index)=>{
test (`Submit with Empty field ${index+1}`, async({page})=>{

    const page2 = await new inputfield (page);
    const invalidpage = await new invalid (page);

    await page2.navigate();

    await page2.gender();
    //await page2.clendearselect(data.Month , data.Year);
    await page2.subject(data.Subjects);

    await page2.submit();
   //  await page.waitForTimeout (10000);

    await invalidpage.erromessage(data.FirstName, data.LastName, data.MobileNumber);
    await page2.submit();
    await page2.close();










    })

});