describe("LoginChain",()=>{


it("talkimata",()=>{

  cy.visit("http://localhost:8080/");
  cy.get("button[class='btn btn-secondary login']").click();
  cy.get("#emailAddress").type('test@test.com');
  cy.get("#password").type('test');
  cy.get("button[type='submit']").click();
  cy.get("div[class='container mx-5'] div:nth-child(1) a:nth-child(1) div:nth-child(1) h3:nth-child(1)").click();
//  cy.wait(10000); // desperation wait
                //  cy.scrollTo('bottom');
//  cy.get("input#comment").should('be.visible');
})
it("UtLabore",()=>{

  cy.visit("http://localhost:8080/");
  cy.get("button[class='btn btn-secondary login']").click();
  cy.get("#emailAddress").type('test@test.com');
  cy.get("#password").type('test');
  cy.get("button[type='submit']").click();
  cy.get("div[class='container mt-5'] div:nth-child(2) a:nth-child(1) div:nth-child(1) h3:nth-child(1)").click();
})
it("KasdGubergren",()=>{

  cy.visit("http://localhost:8080/");
  cy.get("button[class='btn btn-secondary login']").click();
  cy.get("#emailAddress").type('test@test.com');
  cy.get("#password").type('test');
  cy.get("button[type='submit']").click();
  cy.get("div:nth-child(3) a:nth-child(1) div:nth-child(1) h3:nth-child(1)").click();

})
it("VeroAccusam",()=>{
    cy.visit("http://localhost:8080/");
    cy.get("button[class='btn btn-secondary login']").click();
    cy.get("#emailAddress").type('test@test.com');
    cy.get("#password").type('test');
    cy.get("button[type='submit']").click();
    cy.get("div:nth-child(4) a:nth-child(1) div:nth-child(1) h3:nth-child(1)").click();


})
//it("AddOffer",()=>{
//
//  cy.visit("http://localhost:8080/");
//  cy.get("button[class='btn btn-secondary login']").click();
//  cy.get("#emailAddress").type('random@random.com');
//  cy.get("#password").type('sample');
//  cy.get("button[type='submit']").click();
//
//})

})
