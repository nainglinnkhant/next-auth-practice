'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'
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
  name: z
    .string()
    .min(2, 'Name must contain at least 2 characters')
    .max(20, 'Name must not contain more than 50 characters'),
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
