describe('POST a new user', () => {

    it('Add a new jony', () => {
        var user = {
            "email": "jony@gmail.com",
            "name": "jony",
            "gender": "male",
            "status": "active"
        }
        cy.request('POST', 'https://gorest.co.in/public/v2/users', user, {
            headers: {
                authorization: 'a950736a266e2cd58c553c04c6aaed5efeeccd449407f2aafb5f019fa7c15df8'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(201)
            expect({
                email: 'jony@gmail.com'
            }).to.eql({
                email: 'jony@gmail.com'
            })({
                name: 'jony'
            }).to.eql({
                name: 'jony'
            })
            expect({
                gender: 'male'
            }).to.eql({
                gender: 'male'
            })
            expect({
                status: 'active'
            }).to.eql({
                status: 'active'
            })
        })
    })
})