/// <reference types="cypress" />
import { Given, When,Before }  from"@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";
//const url="https://webdriveruniversity.com/";

const basePage=new Base_PO();
const homePage=new Homepage_PO();
Before(()=>{
    cy.log("Execute commands inside Homepage Steps")
    
})

Given('I navigate to the webdriveruniversity homepage',()=>{
    //cy.visit(url);
    //basePage.navigate("");
    //basePage.getPagetitle()
    homePage.navigate("");
})

When('I click on the contact us button' ,()=>{
   // cy.get("#contact-us").invoke("removeAttr","target").click();
   //cy.clickAndOpenLink_InSameTab("#contact-us");
   homePage.clickOn_ContactsUs_button();
})

When('I click on the login portal button' ,()=>{
    //cy.get("#login-portal").invoke("removeAttr","target").click();
    //cy.clickAndOpenLink_InSameTab("#login-portal");
    homePage.clickOn_Login_button();
})