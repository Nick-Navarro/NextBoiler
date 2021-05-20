import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const AuthLayout: React.FC = (props) => {
  const { children } = props
  const router = useRouter()
  const authUser = undefined // to be extracted from store

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
