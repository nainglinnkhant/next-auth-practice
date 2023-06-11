import SignInForm from '@/components/SignInForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function Home() {
  return (
    <Card className='w-[90vw] max-w-[400px]'>
      <CardHeader>
        <CardTitle>Sign in with Next Auth</CardTitle>
      </CardHeader>

      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  )
}
