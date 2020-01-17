import { assert, expect } from 'chai'
import { GetAllUsers } from '../../../../../src/core/use_cases/users'


describe('** core/use_cases/getAllUsers', () => {
    var getAllUsers
    context('- Query success', () => {
        before(() => {
            const MockUsersRepository = {
                getAllUsers: () => Promise.resolve('All Users...')
            }
        
            getAllUsers = new GetAllUsers({
                userRepository: MockUsersRepository
            })

        })

        it('success with all users', (done) => {
            getAllUsers.get().then(response => {
                expect(response).to.equal('All Users...')
                done()
            })
        })
    })

    context('- Internal error', () => {
        before(() => {
            const MockUsersRepository = {
                getAllUsers: () => Promise.reject(new Error('something failed'))
            }

            getAllUsers = new GetAllUsers({
                userRepository: MockUsersRepository
            })
        })

        it('expect fail', (done) => {
            getAllUsers.get().catch(error => {
                expect(error.message).to.equal('something failed')
                done()
            })
        })
    })    
})



// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import 'chai/register-should';
// import app from '../index';

// chai.use(chaiHttp);
// const { expect } = chai;

// describe('Get All Users', () => {

//     it('It should get all books', (done) => {
//         chai.request(app)
//             .get('/api/v1/books')
//             .set('Accept', 'application/json')
//             .end((err, res) => {
//                 expect(res.status).to.equal(200);
//                 res.body.data[0].should.have.property('id');
//                 res.body.data[0].should.have.property('title');
//                 res.body.data[0].should.have.property('price');
//                 res.body.data[0].should.have.property('description');
//                 done();
//             });
//     });

//     it('It should get a particular book', (done) => {
//         const bookId = 1;
//         chai.request(app)
//             .get(`/api/v1/books/${bookId}`)
//             .set('Accept', 'application/json')
//             .end((err, res) => {
//                 expect(res.status).to.equal(200);
//                 res.body.data.should.have.property('id');
//                 res.body.data.should.have.property('title');
//                 res.body.data.should.have.property('price');
//                 res.body.data.should.have.property('description');
//                 done();
//             });
//     });

// });