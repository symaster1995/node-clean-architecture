import { Router } from 'express'
import { makeClassInvoker } from 'awilix-express'
import AuthController from '../../interfaces/controllers/auth.controller'

const authRoutes = Router()

const controller = makeClassInvoker(AuthController)
authRoutes.post('/login', controller('login'))
authRoutes.post('/hashTest', controller('hashTest'))

export default authRoutes