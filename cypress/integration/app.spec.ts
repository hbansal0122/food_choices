import cy from 'cypress';

describe('Test whole app component', () => {
    it('Render the App', () => {

        // Given
        cy.visit('http://localhost:3000')

        // Then
        // cy.get('heading-label').should('have.value', 'Lunch place')
    })
})