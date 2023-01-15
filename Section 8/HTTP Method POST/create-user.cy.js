describe('POST a new user', () => {
    it('Add a new user', () => {
        var user = {
            "name": "Shin",
            "job": "Slayer"
        }
        cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect({ name: 'Shin' }).to.deep.equal({ name: 'Shin' })
            expect({ job: 'Slayer' }).to.deep.equal({ job: 'Slayer' })
        })
    })
})