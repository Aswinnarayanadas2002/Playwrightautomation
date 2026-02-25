import { test, expect } from '@playwright/test';
import { Config } from '@playwright/test';
import { config } from '../DEMOQA.config';
import { data } from '../testData/testData';
import { inputfield } from '../pages/formsubmission';

data.forEach ((data,index)=>{               
  test (`test ${index+1}`, async({page})=>{
   const practiceform = new inputfield(page);
   
   
   await practiceform.navigate();
   await practiceform.name(data.FirstName);
   await practiceform.name1(data.LastName);
   await practiceform.email(data.Email);
   await practiceform.gender();
   await practiceform.number(data.MobileNumber);
   //await practiceform.clendearselect(data.Year, data.Month);

  await practiceform.subject(data.Subjects);

  
  await practiceform.hobbies();
    await practiceform.selectpicture();
   await practiceform.address(data.CurrentAddress);
   await practiceform.state();
   await practiceform.city();
   await practiceform.submit();
   await practiceform.close();





} );

})
