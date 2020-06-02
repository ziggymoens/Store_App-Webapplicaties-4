describe('Sneaker add tests', function () {
    beforeEach(function () {
        cy.login();
    });

    it('Open sneaker add page', function(){
        cy.visit('/sneaker/add');
    });

    it('Name', function () {
        cy.get('[data-cy="name"]').type('Sneaker name');
        cy.get('[data-cy="preview-name"]').contains('Sneaker name');
    });

    it('Color', function () {
        cy.get('[data-cy="color"]').type('Color1');
        cy.get('[data-cy="preview-color"]').contains('Color1');
    });

    it('Price', function () {
        cy.get('[data-cy="price"]').type('199');
        cy.get('[data-cy="preview-price"]').contains('199');
    });

    it('Date', function () {
        cy.get('[data-cy="releaseDate"]').type('5/5/2020');
        cy.get('[data-cy="preview-releaseDate"]').contains('May 5, 2020');
        
    });

    it('Barcode', function () {
        cy.get('[data-cy="barcode"]').type('123456789');
        cy.get('[data-cy="preview-barcode"]').contains('123456789');
    });

    it('Brand', function () {
        cy.get('[data-cy="brand"]').click();
        cy.get('mat-option').contains('Adidas').click()
        cy.get('[data-cy="preview-brand"]').contains('Adidas');
        cy.get('[data-cy="imgBrand"]').should('have.attr', 'src').should('include','adidas')
    });

    it('Check sumbit', function () {
        cy.get('[data-cy="submit"]').click();
        cy.get('[data-cy="appConfirmation"').should("be.visible");
    });

    it('fill', function () {
        cy.get('[data-cy="name"]').type('Sneaker name');
        cy.get('[data-cy="color"]').type('Color1');
        cy.get('[data-cy="price"]').type('199');
        cy.get('[data-cy="releaseDate"]').type('5/5/2020');
        cy.get('[data-cy="barcode"]').type('123456789');
        cy.get('[data-cy="brand"]').click();
        cy.get('mat-option').contains('Adidas').click()
    });

    it('Check reset', function () {
        cy.get('[data-cy="reset"]').click();
        cy.get('[data-cy="preview-name"]').contains('name');
        cy.get('[data-cy="preview-color"]').contains('unknown');
        cy.get('[data-cy="preview-price"]').contains('0.00');
        cy.get('[data-cy="preview-releaseDate"]').contains('January 1, 2020');
        cy.get('[data-cy="imgBrand"]').should('have.attr', 'src').should('include','default')
        cy.get('[data-cy="preview-brand"]').contains('brand');
    });
})   