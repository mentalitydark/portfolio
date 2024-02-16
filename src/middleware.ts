import createMiddleware from 'next-intl/middleware'

import { locales, localePrefix } from './navigation'
 
export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en-us'
})
 
export const config = {
  matcher: ['/', '/(en-us|pt-br)/:path*']
}
