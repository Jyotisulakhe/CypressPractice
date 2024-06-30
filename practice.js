describe('openMRS website testing', () => {
    it('Test case 1', () => {
        cy.visit('https://demo.openmrs.org/openmrs/login.htm')
        cy.get('#username').type('admin')
        cy.get('#password').type('Admin123')
        
        cy.get('#Laboratory').click()
        cy.get('#loginButton').click()
        cy.get('#coreapps-activeVisitsHomepageLink-coreapps-activeVisitsHomepageLink-extension').click()
        cy.get('#patient-search').type('Adm')
        cy.get('.icon-home small').click()
        cy.get('.nav-item logout').click()
    });
});