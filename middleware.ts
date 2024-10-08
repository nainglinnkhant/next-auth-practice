import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname === '/' || req.nextUrl.pathname === '/signup'

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/protected', req.url))
      }

      return null
    }

    if (!isAuth) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/', '/signup', '/protected'],
}
