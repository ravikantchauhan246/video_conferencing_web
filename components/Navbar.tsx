import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href='/' className='flex items-center gap-1'>
        <Image
        src="/icons/logo.svg"
        width={50}
        height={50}
        alt="Vink Logo"
        className='max-sm:size-10'
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>VINK</p>

      </Link>
      <div className='flex flex-between gap-5 '>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        <MobileNav/>

      </div>
    </nav>
  )
}

export default Navbar