'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useToast } from '@/components/ui/useToast'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, 'Password must contain at least 5 characters'),
})

const SignInForm = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { toast } = useToast()

  const onSubmit = async ({ email, password }: z.infer<typeof formSchema>) => {
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

    router.push('/protected')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='mb-4'>
              <FormControl>
                <Input type='email' placeholder='Enter your email' {...field} />
              </FormControl>
              <FormMessage className='text-xs font-normal text-red-600' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='mb-6'>
              <FormControl>
                <Input type='password' placeholder='Enter your password' {...field} />
              </FormControl>
              <FormMessage className='text-xs font-normal text-red-600' />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} className='relative w-full'>
          Sign in
          {isLoading && (
            <Loader2 className='absolute right-3 mr-2 h-4 w-4 animate-spin' />
          )}
        </Button>
      </form>
    </Form>
  )
}

export default SignInForm
