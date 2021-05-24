import React from 'react'
import Link from 'next/link'

import style from './Header.module.scss'

export const Header = (): JSX.Element => (
  <div className="container">
    Patient Portal | Header
    <div className={style.menu}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/auth/sign-in">Sign in</Link>
        </li>
      </ul>
    </div>
  </div>
)
