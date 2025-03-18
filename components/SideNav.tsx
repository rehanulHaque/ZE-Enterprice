"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function SideNav() {
    const [open, setOpen] = useState(false);
  return (
    <div className='flex flex-col items-end rounded-2xl'>
      {/* MAIN ICON */}
      <div>
        <Button onClick={() => setOpen(!open)}>
            {open ? <X/> : <Menu/>}
        </Button>
      </div>

      {/* OPTIONS ITEM */}
      <div className={`${open ? 'block' : 'hidden'} text-left p-4 flex flex-col gap-2 h-full bg-white`}>
        <Link href="/" className='hover:text-blue-500 transition-all hover:scale-110'>Home</Link>
        <Link href="/products" className='hover:text-blue-500 transition-all hover:scale-110'>Products</Link>
        <Link href="/about" className='hover:text-blue-500 transition-all hover:scale-110'>About</Link>
        <Link href="/contact" className='hover:text-blue-500 transition-all hover:scale-110'>Contact</Link>
      </div>
    </div>
  )
}
