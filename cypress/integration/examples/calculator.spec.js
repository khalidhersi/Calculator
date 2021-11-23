//Equals
it("Should check equals works", () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#one").click()
    cy.get("#add").click()
    cy.get("#one").click()
    cy.get("#minus").click()
    cy.get("#one").click()
    cy.get("#equals").click()

    cy.get("#input").should("value", "1")
});


//Addition
it("Should check if 7 + 2 = 9", () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#seven").click()
    cy.get("#add").click()
    cy.get("#two").click()
    cy.get("#equals").click()

    cy.get("#input").should("value", "9")
});

//Subtraction
it("Should check if 5 - 4 = 1", () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#five").click()
    cy.get("#minus").click()
    cy.get("#four").click()
    cy.get("#equals").click()

    cy.get("#input").should("value", "1")
});

//Multiplication
it("Should check if 3 * 8 = 24", () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#three").click()
    cy.get("#times").click()
    cy.get("#eight").click()
    cy.get("#equals").click()

    cy.get("#input").should("value", "24")
});

//Divid
it("Should check if 70 / 7 = 10", () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#seven").click()
    cy.get("#zero").click()
    cy.get("#divide").click()
    cy.get("#seven").click()
    cy.get("#equals").click()

    cy.get("#input").should("value", "10")
});

//Decimals
it("Should check if 9.6 - 0.6 = 9", () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#nine").click()
    cy.get("#point").click()
    cy.get("#six").click()
    cy.get("#minus").click()
    cy.get("#zero").click()
    cy.get("#point").click()
    cy.get("#six").click()
    cy.get("#equals").click()

    cy.get("#input").should("value", "9")
});

//Percentage
it("Should check if 1% x 100 = 100%" , () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#one").click()
    cy.get("#percentage").click()

    cy.get("#input").should("value", "100%")
});

//Clear All
it("Should check if AC = nothing" , () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#eight").click()
    cy.get("#AC").click()

    cy.get("#input").should("value", "")
});

//Backspce
it("Should check if Backspace = nothing" , () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#four").click()
    cy.get("#AC").click()

    cy.get("#input").should("value", "")
});
