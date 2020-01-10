import { Router } from 'express'
import { makeClassInvoker } from 'awilix-express'
import UserController from '../../interfaces/controllers/user.controller'
import authJwt from '../jwt/auth.middleware'

const userRoutes = Router()

const controller = makeClassInvoker(UserController)

userRoutes.get('/', authJwt, controller('listUsers'))
userRoutes.get('/:id', authJwt, controller('showUser'))
userRoutes.post('/', authJwt, controller('createUser'))
userRoutes.put('/:id', authJwt, controller('updateUser'))

export default userRoutes