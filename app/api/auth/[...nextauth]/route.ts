import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

interface Credentials {
  email: string
  password: string
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: (credentials, req) => {
        const { email, password } = credentials as Credentials

        if (email !== 'john@gmail.com' || password !== 'john@@@')
          throw new Error('The provided credentials are incorrect.')

        return { id: '1', email, password }
      },
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
