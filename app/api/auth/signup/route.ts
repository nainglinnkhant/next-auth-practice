import { Prisma } from '@prisma/client'
import { z } from 'zod'
import { hash } from 'bcrypt'

import { db } from '@/lib/db'
import { userSignUpSchema } from '@/lib/validations/signUp'

export async function POST(req: Request) {
  try {
    const user = await req.json()
    const { email, name, password } = userSignUpSchema.parse(user)

    const hashedPassword = await hash(password, 12)

    const createdUser = await db.user.create({
      data: { email, name, password: hashedPassword },
    })

    return new Response(JSON.stringify(createdUser), { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          message: 'The provided entities are unprocessable or invalid.',
        }),
        { status: 422 }
      )
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return new Response(
        JSON.stringify({ message: 'The provided email already exists.' }),
        { status: 409 }
      )
    }

    return new Response(JSON.stringify({ message: 'Something went wrong.' }), {
      status: 400,
    })
  }
}
