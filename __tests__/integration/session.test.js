const { User } = require('../../src/app/models')

describe('Authentication', () => {
    it('should sum two numbers', async () => {
        const user = await User.create({
            name: 'Chris',
            email: 'christiancastro@gmail.com',
            password_hash: '12345'
        })

        console.log(user)
        expect(user.email).toBe('christiancastro@gmail.com')
    })
    
})