'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { GitHubIcon } from '@/components/Icons'

const GitHubSignInButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    await signIn('github')
    setIsLoading(false)
  }

  return (
    <Button
      variant='outline'
      disabled={isLoading}
      className='mt-4 w-full'
      onClick={handleClick}
    >
      {isLoading ? (
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <GitHubIcon className='mr-2 h-4 w-4' />
      )}
      Sign in with GitHub
    </Button>
  )
}

export default GitHubSignInButton
