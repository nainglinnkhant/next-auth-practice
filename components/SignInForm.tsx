'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useToast } from '@/components/ui/useToast'

const SignInForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { toast } = useToast()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    setIsLoading(true)

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (res?.error) {
      setIsLoading(false)
      return toast({
        title: 'Failed to sign in!',
        description: res?.error,
      })
    }

    setIsLoading(false)
    router.push('/protected')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        className='mb-4'
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Input
        className='mb-6'
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Button disabled={isLoading} className='relative w-full'>
        Sign In
        {isLoading && <Loader2 className='absolute right-3 mr-2 h-4 w-4 animate-spin' />}
      </Button>
    </form>
  )
}

export default SignInForm
