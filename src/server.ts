import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { router } from './routes/routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(4444, () => console.log('server is on 4444 port!'))