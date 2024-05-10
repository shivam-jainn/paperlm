import React, { ReactNode } from 'react'
import authpic from '../../../public/authpic.jpg'
export default function Layout({children}:{
    children : ReactNode
}) {
    // const picurl = "../../../public/authpic.png"
  return (
    <section className='w-screen h-screen flex'>
        <div className='w-1/2 h-full'
          style={{
                backgroundImage: `url(${authpic.src})`, 
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
            }}
        >
        </div>
        <div className='w-1/2 h-full'>
            {children}
        </div>
    </section>
  )
}
