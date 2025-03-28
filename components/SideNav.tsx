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
      <div className={`${open ? 'block' : 'hidden'} text-left p-4 flex flex-col gap-2 h-full bg-[#f3f3f3]`}>
        <Link href="/" className='hover:text-blue-500 transition-all hover:scale-110' onClick={() => setOpen(false)}>Home</Link>
        <Link href="/products" className='hover:text-blue-500 transition-all hover:scale-110' onClick={() => setOpen(false)}>Products</Link>
        <Link href="/services" className='hover:text-blue-500 transition-all hover:scale-110' onClick={() => setOpen(false)}>Services</Link>
        <Link href="/about" className='hover:text-blue-500 transition-all hover:scale-110' onClick={() => setOpen(false)}>About</Link>
      </div>
    </div>
  )
}
