'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useToast } from '@/components/ui/useToast'

const SignInForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { toast } = useToast()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (res?.error) {
      return toast({
        title: 'Failed to sign in!',
        description: res?.error,
      })
    }

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

      <Button className='w-full'>Sign In</Button>
    </form>
  )
}

export default SignInForm
