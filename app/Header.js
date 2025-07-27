import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-center m-7'>
        <h3 className='font-bold text-2xl mr-24'>T KAHN</h3> 
      <div className='flex justify-center items-center gap-5'>
        <p>HOME</p>
        <p>MUSIC</p>
        <p>TOUR</p>
        <p>ABOUT</p>

        <div className='flex justify-center gap-2 items-center'>
          <Link href="login">
          <button className='cursor-pointer'>
          <FontAwesomeIcon icon={faCircleUser} />
          <p>Log In</p>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
