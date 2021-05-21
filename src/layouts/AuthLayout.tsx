import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

type AuthLayoutProps = {
  authUser?: number
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ authUser, children }) => {
  const router = useRouter()
  useEffect(() => {
    // If authentificate user exists then redirect to homepage
    if (authUser && (router.route === `/auth/sign-in` || router.route === `/auth/sign-up`)) {
      router.push(`/`)
    }
  }, [])

  return (
    <div className="auth-layout container">
      <div className="content">{children}</div>
    </div>
  )
}

export default AuthLayout
