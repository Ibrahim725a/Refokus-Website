import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = 'Get Started'}) {
  return (
    <div  className='w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center gap-7'>
        <span className='text-sm font-semibold'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button;