describe("assertion",()=>{
    it("assertion",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //implicit assertion
        // 1,should 
        // 2. and 
        cy.url().should("include","opensource-demo")
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should("equal","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("contains","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();

        //explicit assertions
        // 1. expect -- BDD
        // 2. assert -- TDD

        let expectedTitle="King Kohli";

        cy.get(".oxd-userdropdown-name").then((x)=>{
            let actualTitle=x.text();
            cy.log(actualTitle);
            expect(expectedTitle).to.not.equal(actualTitle);
            cy.wait(2000);
            assert.notEqual(expectedTitle,actualTitle);
        });
    });
});