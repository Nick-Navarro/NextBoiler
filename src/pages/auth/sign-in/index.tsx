import React from 'react'
import Link from 'next/link'

import AuthLayout from '@/layouts/AuthLayout'

export declare interface FormDataType {
  usernameOrEmail: string
  password: string
  remember: boolean
}

const Login: React.FunctionComponent = () => (
  <AuthLayout>
    <Link href="/">Home</Link>

    <div>
      <input type="text" placeholder="username or email ..." />
      <input type="password" placeholder="password ..." />
      <input type="submit" value="Submit" />
    </div>
  </AuthLayout>
)

export default Login
