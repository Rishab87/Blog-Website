import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='w-full h-[74vh] flex items-center justify-center dark:'>
        <div className='progress'></div>
    </div>
  )
}

export default Spinner