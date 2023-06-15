import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import SignOutButton from '@/components/SignOutButton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { authOptions } from '@/lib/auth'
import { generateUsernameInitials } from '@/lib/utils'

const Protected = async () => {
  const session = await getServerSession(authOptions)

  if (!session?.user) return redirect('/')

  const { name, email, image } = session.user

  return (
    <div>
      <div className='mb-6 flex items-center space-x-4'>
        <Avatar>
          <AvatarImage src={image || ''} alt='Avatar' />

          <AvatarFallback>{generateUsernameInitials(name || email || '')}</AvatarFallback>
        </Avatar>

        <div className='flex flex-col space-y-1'>
          {name && <p className='text-sm'>{name}</p>}

          {email && <p className='text-sm text-muted-foreground'>{email}</p>}
        </div>
      </div>

      <SignOutButton />
    </div>
  )
}

export default Protected
