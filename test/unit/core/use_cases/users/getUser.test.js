import { assert, expect } from 'chai'
import { GetUser } from '../../../../../src/core/use_cases/users'


describe('** core/use_cases/getUser', () => {
    var getUser

    context('- User exists', () => {
        beforeEach(() => {
            const MockUsersRepository = {
                getUser: (userId) => Promise.resolve({
                    id: userId,
                    name: 'User'
                })
            }

            getUser = new GetUser({
                userRepository: MockUsersRepository
            })
        })

        it('success with user', (done) => {
            getUser.get(1).then(user => {
                expect(user.id).to.equal(1)
                expect(user.name).to.equal('User')
                done()
            })
        })
    })

    context('- User does not exist', () => {
        beforeEach(() => {
            const MockUsersRepository = {
                getUser: () => Promise.reject({
                    message: 'User not found'
                })
            }
            getUser = new GetUser({
                userRepository: MockUsersRepository
            })
        })

        it('user not found with the error', (done) => {
            getUser.get(1).catch(error => {
                expect(error.message).to.equal('User not found')
                done()
            })
        })
    })
})