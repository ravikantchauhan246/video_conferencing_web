import React, { Children, ReactNode } from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        
        {children}
        Footer
    </main>
  )
}

export default RootLayout