/////////////////////////// Register chain //////////////////////
// This UI test does the following:
// 1. Registers a new user
// 2. The registered new user clicks on 'Add post', then select the PostType(OFFERS/REQUESTS)
///////////////////////////////////////////////////////////////


describe("RegisterChain",()=>{


it("Register",()=>{
// visit the website and register a new user
  cy.visit("http://localhost:8080/");
  cy.get(".btn.btn-secondary.login.mx-1").click();
  cy.get("#emailAddress").type('020@random.com'); //change the email address everytime to validate the process of registration
  cy.get("#password").type('sample');
  cy.get("#password_confirm").type('sample');
  cy.get("button[type='submit']").click();

// creating an offer by the new user

   cy.get(".btn.btn-secondary").click();
   cy.get("#title").type("FirstOffer1");
   cy.get("#body").type("OfferBody1");
    cy.get("#postType").select('OFFER'); //Change to REQUEST if the user has to post a request
//   cy.get("#postType").type("OFFER").type("{enter}");
 cy.get("button[type='submit']").click();

  })
})
