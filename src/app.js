const express = require('express')

class AppController {
    /*Esse construtor é um método que executa automaticamente */
    constructor() {
        this.express = express()

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json())
    }

    routes() {
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express