import React, { FC } from 'react'

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-screen-2xl mx-auto md:py-3 md:px-5'>
        {children}
    </div>
  )
}

export default Wrapper;