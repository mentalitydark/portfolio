import express from 'express'
import pages from './pages.js'

const router = express.Router()

export default () => {
  pages(router)

  return router
}