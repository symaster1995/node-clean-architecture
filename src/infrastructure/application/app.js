class Application {
    
    constructor({ server, database }) { // TODO: add auth
        this.server = server
        this.database = database
    }

    async start() {

        if (this.database) {

            await this.database.sequelize
                .authenticate()
                .then(() => {
                    console.log('db connected')
                })
                .catch(err => {
                    console.log(err)
                })
        }

        await this.server.start()
    }
}

export default Application