import React from 'react'

import AuthLayout from '@/layouts/AuthLayout'

export declare interface FormDataType {
  usernameOrEmail: string
  password: string
  remember: boolean
}

const Login: React.FunctionComponent = () => (
  <AuthLayout>
    <input type="text" placeholder="username or email ..." />
    <input type="password" placeholder="password ..." />
  </AuthLayout>
)

export default Login
