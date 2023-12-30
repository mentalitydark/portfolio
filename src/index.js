import 'dotenv/config';

import http from 'http'
import express from 'express'
import { fileURLToPath } from "url";
import path from 'path';

import router from './router/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'public')));

server.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}.`)
})

app.use('/', router())