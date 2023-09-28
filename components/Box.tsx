import React from 'react'
import {twMerge} from 'tailwind-merge'

interface BoxProps{
    children:React.ReactNode
    className?:string;
}

const Box:React.FC<BoxProps> = ({
    children,
    className
}) => {
  return (
    <div 
    className={twMerge(`
            bg-neutral-900
            rounded-lg  
            h-fit
            w-full
        `,
        // border-4 
        // border-sky-500
        className
        )}
    >
        {children}
    </div>
  )
}

export default Box