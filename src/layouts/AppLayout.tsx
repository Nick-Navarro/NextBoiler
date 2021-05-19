import React from 'react'
import { RouteHandler } from '@/middleware/RouteHandler'

// Local files
import { Header } from '@/components/global/Header'

export const AppLayout: React.FC<{ authority: number, layoutClass?: string }> = props => {
  const { authority, layoutClass = '' } = props

  return (
    <RouteHandler authority={authority}>
      <div className={`main-wrapper ${layoutClass}`}>
        <Header />

        {props.children}

      </div>
    </RouteHandler>
  )
}
