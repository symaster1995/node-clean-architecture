import { createContainer, asClass, asFunction, asValue, InjectionMode } from 'awilix'
import { scopePerRequest } from 'awilix-express'

import Application from './infrastructure/application/app'
import Endpoint from './infrastructure/config/endpoint.config'
import Server from './infrastructure/config/server.config'
import config from './infrastructure/config/config'
import dbConfig from './infrastructure/config/config.db'
import router from './infrastructure/routes'
import database from './infrastructure/database/models'
import Validator from './infrastructure/helper/validator/validator.helper'
import PasswordEncrypt from './infrastructure/helper/password.helper'

import userEntity from './core/entity/user/'
import UserSchema from './infrastructure/helper/validator/schema/user.schema'
import { GetAllUsers, GetUser, PostUser, PutUser } from './core/use_cases/users/'
import UserRepository from './core/repository/user.repository'
import UserProvider from './interfaces/data_provider/user.provider'
import UserSerializer from './interfaces/serializers/user.serializer'

import Response from './infrastructure/utils/response'


import JwtManager from './infrastructure/jwt/jwt.manager'
import { authenticate } from './core/use_cases/auth/'

import LoginSchema from './infrastructure/helper/validator/schema/login.schema'

const container = createContainer({
    injectionMode: InjectionMode.PROXY
})

container.register({
    //App configs
    app: asClass(Application).singleton(),
    server: asClass(Server).singleton(),
    endpoint: asClass(Endpoint).singleton(),
    router: asFunction(router).singleton(),
    database: asFunction(database).singleton(),
    config: asValue(config),
    dbConfig: asValue(dbConfig),

    //Helper
    validator: asClass(Validator).singleton(),
    passwordEncrypt: asClass(PasswordEncrypt).singleton(),
    response: asClass(Response).singleton(),

    //User
    userEntity: asFunction(userEntity).singleton(),
    userSchema: asValue(UserSchema),
    getAllUsers: asClass(GetAllUsers).singleton(),
    getUser: asClass(GetUser).singleton(),
    postUser: asClass(PostUser).singleton(),
    putUser: asClass(PutUser).singleton(),
    userRepository: asClass(UserRepository).singleton(),
    userProvider: asClass(UserProvider).singleton(),
    userSerializer: asClass(UserSerializer).singleton(),

    //Auth

    loginSchema: asValue(LoginSchema),
    authenticate: asFunction(authenticate).singleton(),
    jwtManager: asClass(JwtManager).singleton()


})

container.register({
    scopePerRequest: asValue(scopePerRequest(container))
})

export default container