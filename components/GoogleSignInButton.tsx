'use client'

import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/Button'
import { GoogleIcon } from '@/components/Icons'

const GoogleSignInButton = () => {
  return (
    <Button variant='outline' className='w-full' onClick={() => signIn('google')}>
      <GoogleIcon size={20} className='mr-2' />
      Sign in with Google
    </Button>
  )
}

export default GoogleSignInButton
