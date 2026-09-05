import React, { useState } from 'react'
import { nav } from '../data'
import { Link } from 'react-router-dom';
const Navlinks = () => {
    const [ openMenu, setOpenMenu ] = useState(false);

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <div className='w-full'>
        {/* Navbar */}
        <div className="relative z-50 flex w-full items-center justify-between rounded-xl bg-white/95 px-4 sm:px-6 lg:px-10 py-4 shadow-md backdrop-blur-sm">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-800 text-lg font-bold text-white">
            M
            </div>

            <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Mosty<span className="text-blue-800">Stock</span>
            </h2>
        </Link>

        {/* Navigation */}
        <div>
            <ul className={`lg:flex lg:flex-row space-x-6 cursor-pointer text-blue-800 ${openMenu ? 'flex flex-col absolute right-0 bg-blue-50 shadow-2xl rounded-lg transition hover:-translate-y-0.5 hover:text-blue-800 mt-12 px-4 text-blue-600 z-50' : 'hidden'} `}>
                {nav.map((item, id) => (
                    <li 
                        key={id}
                        className='rounded-sm py-2 hover:bg-blue-200 px-2'
                    >
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>            
            
            <div 
                onClick={handleToggleMenu}
                className='lg:hidden cursor-pointer text-blue-800 text-xl'
            >{openMenu ? '✕' : '☰'}</div>
        </div>

        {/* Login */}
        <Link to="/login">
            <button className="rounded-md border border-blue-800 px-4 py-2 font-medium text-blue-800 transition duration-200 hover:bg-blue-800 hover:text-white sm:px-5">
            Login
            </button>
        </Link>

        </div>
    </div>
  )
}

export default Navlinks