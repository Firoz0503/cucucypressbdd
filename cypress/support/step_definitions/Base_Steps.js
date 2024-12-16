// Video 17 - 24
/// <reference types="cypress" />
import { When, Then, Before, After }  from"@badeball/cypress-cucumber-preprocessor";

Before(()=>{
    cy.log("Execute before each Scenario/Test")
    cy.clearLocalStorage()
})

Before({tage: "@smoke"},()=>{
    cy.log("Execute smoke pack")
})

After(()=>{
    cy.log("Execute after each Scenatio/Test")
})

When("I wait for {int} seconds", (seconds)=>{
    cy.wait(seconds*1000)
})