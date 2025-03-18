import Image from 'next/image'
import React from 'react'
import SideNav from './SideNav'
import { HomePageData } from '@/data'

export default function Navbar() {
  return (
    <header className='shadow-md bg-white'>
        <nav className='flex justify-between items-center px-4 py-2 relative'>
            {/* TOP */}
            <div>
                <Image src={HomePageData.mainLogo.src} width={50} height={50} className='rounded-full' alt={HomePageData.mainLogo.alt}/>
            </div>
            {/* BOTTOM */}
            <div className='absolute top-4 right-5 z-50'>
                <SideNav/>
            </div>
        </nav>
    </header>
  )
}