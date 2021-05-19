
// Libraries
import React from 'react'
import { useRouter } from 'next/router'

const NotFoundPage: React.FC<{}> = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Page not found...</h1>
      <button onClick={() => router.push('/')}>Back to home</button>
    </div>
  )
}

export default NotFoundPage
