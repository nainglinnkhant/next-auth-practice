import Link from 'next/link'

import SignInForm from '@/components/SignInForm'
import GitHubSignInButton from '@/components/GitHubSignInButton'
import GoogleSignInButton from '@/components/GoogleSignInButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Separator } from '@/components/ui/Separator'

export default function Home() {
  return (
    <>
      <Card className='w-[90vw] max-w-[400px]'>
        <CardHeader>
          <CardTitle>Sign in with Next Auth</CardTitle>
        </CardHeader>

        <CardContent>
          <SignInForm />

          <div className='my-6 flex items-center space-x-3'>
            <Separator />
            <span className='text-xs text-muted-foreground'>OR</span>
            <Separator />
          </div>

          <GoogleSignInButton />
          <GitHubSignInButton />
        </CardContent>
      </Card>

      <p className='mt-8 text-sm text-muted-foreground'>
        <Link href='/signup' className='underline underline-offset-4'>
          Don&apos;t have an account? Sign Up
        </Link>
      </p>
    </>
  )
}
