const express = require('express');
const db = require('../config/database');
const helmet = require('helmet');
const routes = require('./routes');
const verifyJWT = require('./middlewares/auth')

class Server {

    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(express.json({limit: '100kb'}));
        this.express.use(helmet());
        this.express.use(verifyJWT);
    }

    routes(){
        this.express.use(routes);
    }

}

module.exports = new Server().express;