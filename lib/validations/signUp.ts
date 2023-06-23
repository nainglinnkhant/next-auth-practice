import * as z from 'zod'

export const userSignUpSchema = z.object({
  email: z.string().email(),
  name: z
    .string()
    .min(2, 'Name must contain at least 2 characters')
    .max(50, 'Name must not contain more than 50 characters'),
  password: z.string().min(6, 'Password must contain at least 6 characters'),
})
