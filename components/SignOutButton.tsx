'use client'

import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/Button'

const SignOutButton = () => {
  const router = useRouter()

  return (
    <Button
      variant='outline'
      onClick={() => signOut({ redirect: false }).then(() => router.replace('/'))}
    >
      Sign Out
    </Button>
  )
}

export default SignOutButton
