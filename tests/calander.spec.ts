import { test, expect } from "@playwright/test";
import { data } from "../testData/testData";
import { config } from "../DEMOQA.config";

//test.describe.configure ({mode:"parallel"})

test (`@Web Testing`, async({page}) => {


    await page.goto ("https://demoqa.com/automation-practice-form");
    await page.locator("#dateOfBirthInput").click ()

    while (true) {
     
      const x = page.locator(".react-datepicker__current-month");
        const text = await x.textContent();
       
        const value = text?.includes(config.DOB.Month);
       

        if (value){
            
            break;
        }

        await page.locator(".react-datepicker__navigation--next").click();
     
    }
  
      const y = page.locator(".react-datepicker__current-month");
      const year = await y.textContent();
      const compare = year?.includes("2002");

      if (!compare){

      await page.locator(".react-datepicker__year-select").selectOption("2002");
     

      }
      //await page.waitForTimeout(50000);
     // expect(await page.locator("//div[text()='17']")).toBeVisible();
      await page.locator(".react-datepicker__day--017:not(.react-datepicker__day--outside-month)").click();
      const value = await page.locator("#dateOfBirthInput").inputValue();
      console.log (value);
      



   
}




)