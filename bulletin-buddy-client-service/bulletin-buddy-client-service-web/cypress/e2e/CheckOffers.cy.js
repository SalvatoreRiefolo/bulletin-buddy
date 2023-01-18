describe("VerifyOffers",()=>{

it("CheckOffer",()=>{
    cy.visit("http://localhost:8080/");
    cy.get("button[class='btn btn-secondary login']").click();
    cy.get("#emailAddress").clear();
    cy.get("#emailAddress").type('010@random.com'); //give the same email address that you change in "registerchain"
    cy.get("#password").clear();
    cy.get("#password").type('sample');
    cy.get("button[type='submit']").click();
    cy.get("div:nth-child(6) a:nth-child(1) div:nth-child(1) h3:nth-child(1)").click();
    cy.get("#comment").type('Planning to update the offer');
    cy.get("button[type='submit']").click();
})
})
