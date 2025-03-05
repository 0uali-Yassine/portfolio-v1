import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Toggle the burger menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='p-5 big-shoulders text-xl '>
            <nav class="">
                <div class="flex justify-between items-center">
                    <a className="text-3xl" href="#">YZ</a>

                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-3xl">
                            {isMenuOpen ? '✖' : '☰'} {/* Toggle between hamburger and cross */}
                        </button>
                    </div>
                    
                        <ul className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} justify-between items-center gap-5`}>
                            <li class="nav-item hover:text-[#ECD06F] hover:drop-shadow-md ">
                                <NavLink class="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item hover:text-[#ECD06F] hover:drop-shadow-md ">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item hover:text-[#ECD06F] hover:drop-shadow-md ">
                                <a class="nav-link" href="#work">Work</a>
                            </li>
                            <li class="nav-item hover:text-[#ECD06F] hover:drop-shadow-md ">
                                <NavLink class="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>


                    
                        <div class="flex items-center gap-5" role="search">
                            <div className='flex gap-3'>
                                <button className='btn nav-item hover:text-[#ECD06F] underline  hover:drop-shadow-md'>EN</button>
                                <button className='btn nav-item hover:text-[#ECD06F]  hover:drop-shadow-md'>FR</button>
                            </div>
                            <a  href="/resume.pdf" download="yassineZerouali_resume.pdf"  className="border border-2 px-4 py-2 text-black rounded bg-[#ECD06F] hover:bg-white hover:drop-shadow-md " type="">Resume</a>
                        </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar