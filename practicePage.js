describe('Practice page test', () => {
    it('test case 1', () => {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#bmwradio').click()
        cy.get('#benzcheck').click()
        cy.get('#autosuggest').type('exploring practice page')
    });
});