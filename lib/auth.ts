import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  // The below code is not needed. It is just for learning purposes.
  callbacks: {
    jwt({ token }) {
      return token
    },
    session({ session }) {
      return session
    },
  },
}
