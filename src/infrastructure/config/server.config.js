class Server {
    constructor({ endpoint, config }) {
        this.endpoint = endpoint.api()
        this.config = config
        this.endpoint.set('port', this.config.port || 7000)
    }

    start() {
        return new Promise((resolve) => {
            const server = this.endpoint.listen(this.endpoint.get('port'), () => {
                console.log(`SERVER IS RUNNNING ON PORT ${server.address().port}`)
                resolve()
            })
        })
    }
}

export default Server