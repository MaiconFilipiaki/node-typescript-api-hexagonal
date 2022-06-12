require('dotenv').config();
import { log } from './Logger';
import Mongoose from 'mongoose'

export default async () => {
    try {
        const urlConnection = process.env.MONGO_URI
        if (!urlConnection) {
            throw new Error('MongoDB url connection not found')
        }
        log.info('Connecting to MongoDB...')
        await Mongoose.connect(urlConnection, {
            serverSelectionTimeoutMS: 1000,
        })
        log.info('Connecting to MongoDB with success')
    } catch (err) {
        throw new Error(`Error connecting to MongoDB ${err}`)
    }
} 
