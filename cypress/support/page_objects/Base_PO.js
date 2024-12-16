/// <reference types="cypress" />

class Base_PO{
    //baseUrl="https://webdriveruniversity.com/";

    navigate(path){
        cy.fixture("config.json").then((data)=>
        {
           cy.visit(data.baseUrl+path) 
        })

    }
    getPagetitle(){
        return cy.title()
    }
}

export default Base_PO;