import { Router } from 'express'
import userRoutes from './user.routes'
import authRoutes from './auth.routes'

const router = ({ scopePerRequest }) => {

    const routes = Router({ mergeParams: true })
    routes.use(scopePerRequest)
    routes.use(`/api/v1/users`, userRoutes)
    routes.use(`/api/v1/auth`, authRoutes)

    return routes
}

export default router