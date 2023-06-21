import * as z from 'zod'

export const userSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, 'Password must contain at least 5 characters'),
})
