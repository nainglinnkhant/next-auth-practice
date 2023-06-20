'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

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

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  password: z.string().min(5),
})

const SignUpForm = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  })

  const { toast } = useToast()

  const onSubmit = async ({ email, name, password }: z.infer<typeof formSchema>) => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='mb-3'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='name@example.com' {...field} />
              </FormControl>
              <FormMessage className='text-xs font-normal text-red-600' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='mb-3'>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Sally' {...field} />
              </FormControl>
              <FormMessage className='text-xs font-normal text-red-600' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='mb-8'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' {...field} />
              </FormControl>
              <FormDescription className='text-xs'>
                Password must be at least 5 characters.
              </FormDescription>
              <FormMessage className='text-xs font-normal text-red-600' />
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
