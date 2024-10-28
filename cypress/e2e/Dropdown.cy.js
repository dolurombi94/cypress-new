describe("dropdownbox",()=>{
    it.skip("dropdowntest",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#country").select("canada");
    })

    it.skip("dropdowntest2",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').click().type("nig");
        cy.wait(2000);
        cy.get(".select2-results__option").each(($el) => {
            if ($el.text() === "Nigeria") {
                cy.wrap($el).click(); // Use cy.wrap to click the jQuery element
            };
        });
        cy.get('#select2-billing_country-container').should('contain', 'Nigeria');
    })

    it("dynamic",()=>{
        cy.visit("https://www.wikipedia.org/");
        cy.get('#searchInput[type="search"]').type("nigeria");
        cy.get('#searchInput[type="search"]').should("be.visible","nigeria");
        cy.get(".suggestion-title").each(($el)=>{
            cy.log($el.text());

            if($el.text()=="Nigeria"){
                cy.wrap($el).click();
            }
        });

        let currentpage =cy.title();
        currentpage.should("eq","Nigeria - Wikipedia")
    })
})