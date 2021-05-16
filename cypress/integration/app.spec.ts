describe('Test whole app component', () => {
    it('Render the App and check heading', () => {

        // Given
        cy.visit('http://localhost:3000')

        // Then
        cy.get('[data-test-id="heading"]').should('contain', 'Lunch place')
    })

    it('Check if restaurant search is working', () => {

        // Given
        const searchItem = 'Amsterdam';

        // When
        cy.get('[data-test-id="search-input"]').type(searchItem)
        cy.get('[data-test-id="search-button"]').click()
        cy.wait(1000)

        // Then
        cy.get('[data-test-id="table-header"]').find('th').should('have.length', 5)
    })

    it('Check if add participant functionality is working',  () => {

        // When
        // Make 3 participants to test
        cy.get('[data-test-id="add-participant"]').click()
        cy.get('[data-test-id="add-participant"]').click()
        cy.get('[data-test-id="add-participant"]').click()
        cy.get('[data-test-id="participant-area-0"]').find("input").type("Name 1");
        cy.get('[data-test-id="participant-area-1"]').find("input").type("Name 2");
        cy.get('[data-test-id="participant-area-2"]').find("input").type("Name 3");

        // Then
        cy.get('[data-test-id="participants"]').find('input').should('have.length', 3)
    })

    it('Check if food choice voting is working and winner is selected',  () => {

        // When
        // Fake votes to get the winner
        cy.get('[data-test-id="participant-area-0"]')
            .find('[data-test-id="voting-section-0"]').first().click()
        cy.get('[data-test-id="participant-area-1"]')
            .find('[data-test-id="voting-section-0"]').click()
        cy.get('[data-test-id="participant-area-2"]')
            .find('[data-test-id="voting-section-1"]').click()

        // Then
        cy.get('[data-test-id="rest-0"]')
            .find('[data-test-id="winner"]').should('have.length', 1)
    })

    it('Check if remove button deletes a participant form the list',  () => {

        // When
        cy.get('[data-test-id="participant-area-0"]')
            .find('[data-test-id="remove-participant"]').click()

        // Then
        cy.get('[data-test-id="participants"]').find('input').should('have.length', 2)
    })
})

export {

}