import { Application, Request, Response } from 'express';
import * as fs from 'fs'

interface RegisterFile {
    services: any
}

interface RegisterApi {
    name: string,
    host: string,
    port: number,
    verb: string,
}


const register = (app: Application) => {
    app.post('/register-api', async (req: Request, res: Response) => {
        const body = req.body as RegisterApi
        if (!body.name || !body.host || !body.port || !body.verb) {
            res.status(422).json({"msg": "You must inform name, port, host, verb"})
        }
        const services: RegisterFile = {
            services: {}
        }
        services.services.user = {...body}
        fs.writeFile('./register.json', JSON.stringify(services), (err) => {
            if (err) {
                res.status(500).send('Could not register')
            } else {
                res.send('Successfully')
            }
        })
        
    })
}

export {register}