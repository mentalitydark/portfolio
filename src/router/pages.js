import { staticFile } from '../utils/index.js'

/**
 * @param {import('express').Router} router
 */
export default (router) => {
  router.get('/', (_, res) => res.sendFile(staticFile("page", "home.html")))
  router.get('/about-me', (_, res) => res.sendFile(staticFile("page", "about-me.html")))
  router.get('/projects', (_, res) => res.sendFile(staticFile("page", "projects.html")))
}