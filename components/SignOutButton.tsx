'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/Button'

const SignOutButton = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    await signOut({ redirect: false })
    router.replace('/')
  }

  return (
    <Button variant='outline' disabled={isLoading} className='w-24' onClick={handleClick}>
      {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Sign Out'}
    </Button>
  )
}

export default SignOutButton
