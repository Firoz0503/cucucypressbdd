// Video 17 - 24
/// <reference types="cypress" />
import { When, Then }  from"@badeball/cypress-cucumber-preprocessor";
import Conact_Us_PO from "../page_objects/Contact_Us_PO";

const contactus_page=new Conact_Us_PO();

When ('I type a first name',()=>{
    //cy.get('[name="first_name"]').type("Firoz")
    contactus_page.type_FirstName("Firoz");
})

When ('I type a last name',()=>{
    //cy.get('[name="last_name"]').type("Ahmed")
    contactus_page.type_LastName("Ahmed");
})

When ('I enter an email address',()=>{
    //cy.get('[name="email"]').type("abc@gmail.com")
    contactus_page.type_EmailAddress("abc@gmail.com");
})

When ('I type a comment',()=>{
    //cy.get('textarea[name="message"]').type("Hello How are you!")
    contactus_page.type_Comment("Hello How are you!");
})

When ('I click on the submit button',()=>{
    //cy.get('[type="submit"]').click()
    contactus_page.clickOn_Submit_Button();
})

Then ('I should be presented with a successful contact us submission message',()=>{
    //cy.get('h1').should('have.text','Thank You for your Message!')
    contactus_page.validate_Submission_Header('Thank You for your Message!');
})

Then ('I should be presented with a unsuccessful contact us submission message',()=>{
   // cy.get('body').contains('Error: Invalid email address')
   contactus_page.validate_Submission_Header('Error: Invalid email address');
})

When('I type a first name {string}', (firstName)=>{
    //cy.get('[name="first_name"]').type(firstName)
    contactus_page.type_FirstName(firstName);

})

When('I type a last name {string}', (lastName)=>{
    //cy.get('[name="last_name"]').type(lastName)
    contactus_page.type_LastName(lastName);
})

When('I type a specific email address {string}', (email)=>{
    //cy.get('[name="email"]').type(email)
    contactus_page.type_EmailAddress(email);
})

When('I type a word {string} and number {int} within the comment input field', (word,number)=>{
    //cy.get('textarea[name="message"]').type(word+" " +number)
    contactus_page.type_Comment(word+" " +number);
})

When('I type a first name {word} and last name {string}',(firstName,lastName)=>{
   // cy.get('[name="first_name"]').type(firstName)
   // cy.get('[name="last_name"]').type(lastName)
   contactus_page.type_FirstName(firstName);
   contactus_page.type_LastName(lastName);

})

When('I type a {string} and comment {string}',(email, comment)=>{
    //cy.get('[name="email"]').type(email)
    //cy.get('textarea[name="message"]').type(comment)

    contactus_page.type_EmailAddress(email);
    contactus_page.type_Comment(comment);

})

Then('I should be presented with header text {string}',(message)=>{
//cy.xpath("//h1 | //body").contains(message)
contactus_page.validate_Submission_Header(message);
})