import SignUpForm from '@/components/SignUpForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const SignUp = () => {
  return (
    <Card className='w-[90vw] max-w-[400px]'>
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
      </CardHeader>

      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  )
}

export default SignUp
