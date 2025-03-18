import Image from 'next/image'
import React from 'react'
import SideNav from './SideNav'
import { HomePageData } from '@/data'

export default function Navbar() {
  return (
    <header className='shadow-md'>
        <nav className='flex justify-between items-center p-4 relative'>
            {/* TOP */}
            <div>
                <Image src={HomePageData.mainLogo.src} width={50} height={50} className='rounded-full' alt={HomePageData.mainLogo.alt}/>
            </div>
            {/* BOTTOM */}
            <div className='absolute top-5 right-5 z-50'>
                <SideNav/>
            </div>
        </nav>
    </header>
  )
}
