import express, { application } from 'express'
import * as dotenv from 'dotenv'
import {v4 as uuidv4} from 'uuid'
import processosRouter from './routes/processos.routes.js'

dotenv.config()
const app = express()
app.use(express.json())

app.use('/processos', processosRouter)


app.listen(Number(process.env.PORT),() => console.log('server on port 8080!'))