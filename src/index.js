import 'dotenv/config';

import http from 'http'
import express from 'express'

const app = express()
const server = http.createServer(app)

server.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}.`)
})