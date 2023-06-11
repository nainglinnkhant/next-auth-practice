'use client'

import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

import { Skeleton } from '@/components/ui/Skeleton'
import { Button } from '@/components/ui/Button'

const Protected = () => {
  const router = useRouter()
  const { data, status } = useSession()

  if (status === 'loading')
    return (
      <div className='flex flex-col gap-3'>
        <Skeleton className='mb-2 h-5 w-64' />
        <Skeleton className='h-5 w-40' />
        <Skeleton className='h-5 w-40' />
        <Skeleton className='h-5 w-40' />
      </div>
    )

  console.log(data)

  if (status === 'unauthenticated') return router.replace('/')

  return (
    <div>
      <p className='mb-4'>This is the protected content.</p>

      <pre className='mb-8 text-sm'>{JSON.stringify(data?.user, null, 2)}</pre>

      <Button variant='outline' onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  )
}

export default Protected
