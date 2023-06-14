import { getServerSession } from 'next-auth'

import SignOutButton from '@/components/SignOutButton'
import { authOptions } from '@/lib/auth'

const Protected = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <p className='mb-4'>This is the protected content.</p>

      <pre className='mb-8 text-sm'>{JSON.stringify(session?.user, null, 2)}</pre>

      <SignOutButton />
    </div>
  )
}

export default Protected
