import 'dotenv/config';

import http from 'http'
import express from 'express'

import router from './router/index.js';
import { staticFile } from './utils/static-file.js';

const app = express()
const server = http.createServer(app)

app.use(express.static(staticFile()));

server.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}.`)
})

app.use('/', router())