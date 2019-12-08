import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'

class Endpoint {
    constructor({ router }) {
        this.router = router
        this.app = express()

        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(logger('dev'))
        this.app.use(cors())
        this.app.use(this.router)
    }

    api() {
        return this.app
    }
}

export default Endpoint