require('dotenv').config();
import { log } from './config/logger';
import express, { Application } from 'express'
import apiErrorHandler from './app/exception/apiErrorHandler';
import MongoConfig from './config/mongo'
import { routing } from './app/http/api/router';


async function mountApp() {
    const app: Application = express()
    await MongoConfig()
    
    app.use(express.json())
    routing(app)
    app.use(apiErrorHandler)
    const port = process.env.PORT_RUN
    app.listen(port, () => log.info(`🚀 Server On ${port}`))
}

mountApp()

