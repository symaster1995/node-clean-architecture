import { assert, expect } from 'chai'
import { PostUser } from '../../../../../src/core/use_cases/users'


describe('** core/use_cases/postUser', () => {
    var postUser

    const userValid = {
        user: Object.freeze({
            getFirstName: () => 'firstName',
            getLastName: () => 'lastName',
            getEmail: () => 'email',
            getPassword: () => 'password',
            getCreatedAt: () => 'createdAt',
            getUpdatedAt: () => 'updatedAt'
        })
    }

    const errorValidation = {
        error: 'Validation Error'
    }

    const MockPasswordEncrypt = {
        hashPassword: (string) => Promise.resolve('password')
    }

    const userData = { name: 'user' }

    context('- User is valid', () => {
        before(() => {
            const MockUsersRepository = {
                postUser: (user) => Promise.resolve(user)
            }

            postUser = new PostUser({
                userRepository: MockUsersRepository,
                userEntity: (data) => userValid,
                passwordEncrypt: MockPasswordEncrypt
            })
        })

        it('create user successfully', (done) => {
            postUser.post(userData).then(user => {
                expect(user.firstName).to.equal('firstName')
                expect(user.lastName).to.equal('lastName')
                expect(user.email).to.equal('email')
                expect(user.password).to.equal('password')
                expect(user.createdAt).to.equal('createdAt')
                expect(user.updatedAt).to.equal('updatedAt')

                done()
            })
        })
    })

    context('- User is invalid', () => {
        before(() => {
            const MockUsersRepository = {
                postUser: (user) => Promise.resolve(user)
            }

            postUser = new PostUser({
                userRepository: MockUsersRepository,
                userEntity: (data) => errorValidation,
                passwordEncrypt: MockPasswordEncrypt
            })
        })

        it('user validation error', (done) => {
            postUser.post(userData).then(response => {
                expect(response.error).to.equal('Validation Error')
                done()
            })
        })
    })

    context('- Internal error', () => {
        before(() => {
            const MockUsersRepository = {
                postUser: (user) => Promise.reject('internal repository error')
            }

            postUser = new PostUser({
                userRepository: MockUsersRepository,
                userEntity: (data) => userValid,
                passwordEncrypt: MockPasswordEncrypt
            })
        })

        it('something wrong query', (done) => {
            
            postUser.post(userData).catch(error => {
                expect(error).to.equal('internal repository error')
                done()
            })
        })

    })
})