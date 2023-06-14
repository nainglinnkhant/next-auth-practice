'use client'

import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/Button'
import { GitHubIcon } from '@/components/Icons'

const GitHubSignInButton = () => {
  return (
    <Button variant='outline' className='mt-4 w-full' onClick={() => signIn('github')}>
      <GitHubIcon size={16} className='mr-2' />
      Sign in with GitHub
    </Button>
  )
}

export default GitHubSignInButton
