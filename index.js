import container from './src/container'

const app = container.resolve('app')

app
    .start()
    .catch((error) => {
        console.log('err indexjs', error)
    })