'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'
import { userSignUpSchema } from '@/lib/validations/signUp'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useToast } from '@/components/ui/useToast'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form'

type FormData = z.infer<typeof userSignUpSchema>

const SignUpForm = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  })

  const { toast } = useToast()

  const onSubmit = async ({ email, name, password }: FormData) => {
    setIsLoading(true)

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      setIsLoading(false)
      return toast({
        title: 'Failed to sign up!',
        description: data.message,
      })
    }

    toast({
      title: 'Sign-up sucess!',
      description: 'You can now sign in using the signed up email and password.',
    })
    router.replace('/')
  }

  const {
    formState: { errors },
  } = form

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='mb-3'>
              <FormLabel className='text-foreground'>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='name@example.com' {...field} />
              </FormControl>
              <FormMessage className='text-xs font-normal text-destructive' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='mb-3'>
              <FormLabel className='text-foreground'>Name</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Sally' {...field} />
              </FormControl>
              <FormMessage className='text-xs font-normal text-destructive' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='mb-8'>
              <FormLabel className='text-foreground'>Password</FormLabel>
              <FormControl>
                <Input type='password' {...field} />
              </FormControl>
              <FormDescription
                className={cn('text-xs', errors.password && 'text-destructive')}
              >
                Password must contain at least 5 characters
              </FormDescription>
            </FormItem>
          )}
        />

        <Button disabled={isLoading} className='relative w-full'>
          Sign up
          {isLoading && (
            <Loader2 className='absolute right-3 mr-2 h-4 w-4 animate-spin' />
          )}
        </Button>
      </form>
    </Form>
  )
}

export default SignUpForm
