'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { GoogleIcon } from '@/components/Icons'

const GoogleSignInButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    signIn('google')
  }

  return (
    <Button
      variant='outline'
      disabled={isLoading}
      className='w-full'
      onClick={handleClick}
    >
      {isLoading ? (
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <GoogleIcon className='mr-2 h-4 w-4' />
      )}
      Sign in with Google
    </Button>
  )
}

export default GoogleSignInButton
