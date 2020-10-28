import * as React from 'react'
import cn from 'classnames'

// @ts-ignore
import s from './App.modules.scss'

export const App: React.FC = () => {
  return (
    <div className={s.container}>
      <h1 className={cn(s.greeting, 'text-center', 'fill-width')}>I'am App</h1>
    </div>
  )
}
