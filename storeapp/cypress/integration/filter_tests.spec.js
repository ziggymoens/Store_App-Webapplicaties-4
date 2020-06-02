describe('Filter tests', function () {
    beforeEach(function () {
        cy.login();
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Sneakers',
            status: 200,
            response: 'fixture:sneakers.json'
        });
    });

    it('Name filter - 1', function () {
        cy.visit('/');
        cy.get('[data-cy=filterInput]').type('yee');
        cy.get('[data-cy=sneakerCard]').should('have.length', 3);
        cy.get('[data-cy=view]').click();
        cy.get('mat-option').contains('Table').click();
        cy.get('[data-cy=sneakerTable]').find('tr').should('have.length', 3+1)
    });

    it('Name filter - 2', function () {
        cy.visit('/');
        cy.get('[data-cy=filterInput]').type('qwerty');
        cy.get('[data-cy=sneakerCard]').should('have.length', 0);
        cy.get('[data-cy=view]').click();
        cy.get('mat-option').contains('Table').click();
        cy.get('[data-cy=sneakerTable]').find('tr').should('have.length', 0+1)
    });

    it('Brand filter - 1', function () {
        cy.visit('/');
        cy.get('[data-cy=filterInputBrand]').type('Adi');
        cy.get('[data-cy=sneakerCard]').should('have.length', 3);
        cy.get('[data-cy=view]').click();
        cy.get('mat-option').contains('Table').click();
        cy.get('[data-cy=sneakerTable]').find('tr').should('have.length', 3+1)
    });

    it('Brand filter - 2', function () {
        cy.visit('/');
        cy.get('[data-cy=filterInputBrand]').type('Fila');
        cy.get('[data-cy=sneakerCard]').should('have.length', 0);
        cy.get('[data-cy=view]').click();
        cy.get('mat-option').contains('Table').click();
        cy.get('[data-cy=sneakerTable]').find('tr').should('have.length', 0+1)
    });

    it('Scan filter - 1', function () {
        cy.visit('/sneaker/scan');
        cy.get('[data-cy=filterInput]').type('CP9654');
        cy.get('[data-cy=sneakerTable]').find('tr').should('have.length', 1+1)
    });

    it('Scan filter - 2', function () {
        cy.visit('/sneaker/scan');
        cy.get('[data-cy=filterInput]').type('1234567890');
        cy.get('[data-cy=sneakerTable]').find('tr').should('have.length', 0+1)
    });
});