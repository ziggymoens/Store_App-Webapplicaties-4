describe('Site Connection', function () {
    beforeEach(function () {
        cy.login();
    });

    it('our app runs', function () {
        cy.visit('/');
        cy.get('[data-cy=filterInput]').type('yee');
        cy.get('[data-cy=sneakerCard]').should('have.length', 3);
    });

    it('http get for sneakers', function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Sneakers'
        });
    });

    it('mock sneaker get', function () {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Sneakers',
            status: 200,
            response: 'fixture:sneakers.json'
        });

        cy.visit('/');
        cy.get('[data-cy=sneakerCard]').should('have.length', 7);
    });

    it('on error should show error message', function () {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Sneakers',
            status: 500,
            response: 'ERROR'
        });
        cy.visit('/');
        cy.get('[data-cy=appError]').should('be.visible');
    });
});