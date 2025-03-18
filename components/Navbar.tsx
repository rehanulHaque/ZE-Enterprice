import Image from 'next/image'
import React from 'react'
import SideNav from './SideNav'

export default function Navbar() {
  return (
    <header className='shadow-md'>
        <nav className='flex justify-between items-center p-4 relative'>
            {/* TOP */}
            <div>
                <Image src={"/main_logo.jpg"} width={50} height={50} className='rounded-full' alt='Logo'/>
            </div>
            {/* BOTTOM */}
            <div className='absolute top-5 right-5 z-50'>
                <SideNav/>
            </div>
        </nav>
    </header>
  )
}
