    import { test , expect } from "@playwright/test";
    import { aleart } from "../pages/Alert";
    import { data } from "../testData/testData";
    import { inputfield } from "../pages/formsubmission";

    test (`@Sanity aleart`, async({page})=>{
        const dialoge = new aleart(page);
        const dialoge1 = new inputfield(page);
        await dialoge.alearnavigation();
        await dialoge.Clickpromptbox();
    }),

    test("screenshot", async({page})=>{
await page.goto ("https://teleporthq.io/static-website-templates");
        expect (await page.screenshot()).toMatchSnapshot("new.png")
    })

