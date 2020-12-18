import React, { useState } from 'react';

import Logo from './akademis.png'

const Navbar = (props) => {
    let [menuOpened, setMenuOpened] = useState(false)

    const clickHandler = () => {
        setMenuOpened(!menuOpened)
    }

    const darkHandler = () => {
        props.darkHandler[0](!props.darkHandler[1])
        localStorage.setItem('darkMode', !props.darkHandler[1])
    }

    return (
        <nav className="bg-gray-200 dark:bg-gray-900 transition">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:justify-start">
                        <img src={Logo} className='h-10 mr-4'></img>
                        <p className="font-sans font-bold light:text-black dark:text-white transition">Chronos AIS</p>
                    </div>
                    <div className="flex-1 flex items-center justify-end">
                        <p className={'dark:text-white transition'}>Dark Mode</p>
                        <div className="w-8 py-1 ml-5 relative my-1 cursor-pointer">    
                            <div className={`h-5 bg-gray-300 dark:bg-gray-600 rounded-full`} onClick={darkHandler}>
                                <div className="-ml-3 dark:ml-3 w-6 h-6 absolute transition-all transform ease-linear duration-100 flex items-center justify-center rounded-full bg-white dark:bg-blue-400 shadow-toggle border-gray-300 top-0 left-4 top-a-bit"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </nav>
    )    
}

export default Navbar
