/////////////////////////// login chain //////////////////////
// This UI test does the following:
// 1. the test logs in and checks if Talkimata requests exists
// 2. the test logs in and checks if Utlabore offer exists
// 3. the test logs in and checks if  KasdGubergren requests exists
// 4. the test logs in and checks if VeroAccusam offer exists
// 5. the user adds a new offer
// 6. the user adds a new request
// 7. the user adds a new comment to the existing offer
///////////////////////////////////////////////////////////////
describe("LoginChain",()=>{

// 1. the test logs in and checks if Talkimata requests exists
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

// 2. the test logs in and checks if Utlabore offer exists
it("UtLabore",()=>{

  cy.visit("http://localhost:8080/");
  cy.get("button[class='btn btn-secondary login']").click();
  cy.get("#emailAddress").type('test@test.com');
  cy.get("#password").type('test');
  cy.get("button[type='submit']").click();
  cy.get("div[class='container mt-5'] div:nth-child(2) a:nth-child(1) div:nth-child(1) h3:nth-child(1)").click();
})

// 3. the test logs in and checks if  KasdGubergren requests exists
it("KasdGubergren",()=>{

  cy.visit("http://localhost:8080/");
  cy.get("button[class='btn btn-secondary login']").click();
  cy.get("#emailAddress").type('test@test.com');
  cy.get("#password").type('test');
  cy.get("button[type='submit']").click();
  cy.get("div:nth-child(3) a:nth-child(1) div:nth-child(1) h3:nth-child(1)").click();

})

// 4. the test logs in and checks if VeroAccusam offer exists
it("VeroAccusam",()=>{
    cy.visit("http://localhost:8080/");
    cy.get("button[class='btn btn-secondary login']").click();
    cy.get("#emailAddress").type('test@test.com');
    cy.get("#password").type('test');
    cy.get("button[type='submit']").click();
    cy.get("div:nth-child(4) a:nth-child(1) div:nth-child(1) h3:nth-child(1)").click();


})

// 5. the user adds a new offer

//remove skip when you run for the first time to create a new offer
it.skip("AddOffer",()=>{

    cy.visit("http://localhost:8080/");
    cy.get("button[class='btn btn-secondary login']").click();
    cy.get("#emailAddress").clear();
    cy.get("#emailAddress").type('test@test.com');
    cy.get("#password").clear();
    cy.get("#password").type('test');
     cy.get("button[type='submit']").click();
     cy.get(".btn.btn-secondary").click(); // AddPost button click
     cy.get("#title").type("MyFirstOffer");
      cy.get("#body").type("TheOfferBody");
      cy.get("#postType").select('OFFER');
      cy.get("button[type='submit']").click();
})

// 6. the user adds a new request
//remove skip when you run for the first time to create a new request
it.skip("AddRequest",()=>{

    cy.visit("http://localhost:8080/");
    cy.get("button[class='btn btn-secondary login']").click();
    cy.get("#emailAddress").clear();
    cy.get("#emailAddress").type('test@test.com');
    cy.get("#password").clear();
    cy.get("#password").type('test');
     cy.get("button[type='submit']").click();
     cy.get(".btn.btn-secondary").click(); // AddPost button click
     cy.get("#title").type("MyFirstRequest");
      cy.get("#body").type("TheRequestBody");
      cy.get("#postType").select('REQUEST');
      cy.get("button[type='submit']").click();
})

// 7. the user adds a new comment to the existing offer

  it("AddComment",()=>{

    cy.visit("http://localhost:8080/");
    cy.get("button[class='btn btn-secondary login']").click();
    cy.get("#emailAddress").clear();
    cy.get("#emailAddress").type('test@test.com');
    cy.get("#password").clear();
    cy.get("#password").type('test');
    cy.get("button[type='submit']").click();
    cy.get("#postType").select('Show OFFERS');
    cy.get("div:nth-child(3) a:nth-child(1) div:nth-child(1) h3:nth-child(1)").click();
    cy.get("#comment").type('Planning to update the offer, this is my comment');
    cy.get("button[type='submit']").click();
})
})
