import { fileURLToPath } from 'url'
import path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * @param  {...string} filename 
 * @returns {string[]}
 */
export function staticFile(...filename) {
  return path.join(__dirname, '..', 'public', ...filename)
}