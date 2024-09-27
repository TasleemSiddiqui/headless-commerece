import React, { FC } from 'react'

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-screen-2xl mx-auto py-3 px-5'>
        {children}
    </div>
  )
}

export default Wrapper;