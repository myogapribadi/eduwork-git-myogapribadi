describe('Validate Content', () => {
    it.only('Validate Limber', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.body.abilities[0].ability.name).to.eq('limber')
            expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/')
        })
        // cy.request('GET', 'https://pokeapi.co/api/v2/ability/7/').as('pokemon')
        // cy.get('@pokemon').its('body').should('include', {name: "limber"})
    })
})