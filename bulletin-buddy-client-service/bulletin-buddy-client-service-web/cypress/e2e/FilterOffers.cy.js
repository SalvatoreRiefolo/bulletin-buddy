//Select filter option after logging in with registered user ID and password
//dropdown shows 2 options: 1)Show OFFERS 2)Show REQUESTS

describe("FilterOffersDropdown",()=>{

  it("SelectFilterOption",()=>{

    cy.visit("http://localhost:8080/");
    cy.get("button[class='btn btn-secondary login']").click();
    cy.get("#emailAddress").clear();
    cy.get("#emailAddress").type('test@test.com');
    cy.get("#password").clear();
    cy.get("#password").type('test');
    cy.get("button[type='submit']").click();
    cy.get("#postType").select('Show OFFERS');
    cy.get("div[class='container mt-5'] div:nth-child(2) a:nth-child(1) div:nth-child(1) h3:nth-child(1)").click();





  //cy.get('.form-outline.mb-4').contains('Show OFFERS').click();
  //cy.get("label[for='postType']").click();

})

})
