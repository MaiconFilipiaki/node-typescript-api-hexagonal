import { Router } from 'express'
import { createUser } from './user/controller'
import validationRequest from '../middleware/validation-request'
import userInput from './user/input/userInput'

const router = Router()

router.post('/user', validationRequest(userInput), createUser)

export {router}
