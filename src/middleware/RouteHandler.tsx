import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { USER } from '@/../config/constants'
// Local files

export const RouteHandler: React.FC<{ authority: number, children: any }> = (props) => {
  const router = useRouter()

  if (props.authority >= USER && router.route !== '/') {
    router.push('/auth/sign-in')
    return null
  }

  return props.children
}
