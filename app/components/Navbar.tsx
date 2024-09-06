import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from './dojo-logo.png'


export const Navbar = () => {
  return (
    <nav>
        <Image src={Logo} alt="dojo help desk" width={70} quality={100} placeholder='blur'/>
        <h1>Dojo logo</h1>
        <Link href='/'>Home</Link>
        <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}
