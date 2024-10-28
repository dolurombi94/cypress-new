describe("checkbox",()=>{
    it("checkbox",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("[type='checkbox']").check().and("be.checked");
        cy.get("#tuesday").should("be.visible").uncheck();

        cy.get("#male").should("be.visible").check();
        cy.get("#male").should("be.checked")
    })
})