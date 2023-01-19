describe('Validate API Header', () => { 
    it.only('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
        .should('include', '')
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.body.abilities[0].ability.name).to.eq('limber')
            expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/')
        })
    })
})