
import React from 'react'
import style from './Header.module.scss'

export const Header = (): JSX.Element => {

  return (
    <div className="container">
      Patient Portal | Header

      <div className={style.menu}>
        <ul>
          <li>Home</li>
        </ul>
      </div>
    </div>
  )
}
