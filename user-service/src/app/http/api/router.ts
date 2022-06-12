import { Application } from 'express'
import { router as RouterV1 } from './v1/router'

const _prefixV1 = '/api/v1/'

const routing = (app: Application) => {
    app.use(_prefixV1, RouterV1)
}

export {
    routing,
}
