import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineCloudDownload } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='p-5 text-xl big-shoulders'>
            <nav className="flex justify-between items-center">
                <a className="text-3xl" href="#">YZ</a>

                {/* Burger Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-3xl  hover:cursor-pointer">
                        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex justify-between items-center gap-5">
                    <li className="nav-item hover:text-[#ECD06F] hover:drop-shadow-md">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item hover:text-[#ECD06F] hover:drop-shadow-md">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item hover:text-[#ECD06F] hover:drop-shadow-md">
                        <a className="nav-link" href="#work">Work</a>
                    </li>
                    <li className="nav-item hover:text-[#ECD06F] hover:drop-shadow-md">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>

                {/* Desktop Language & Resume */}
                <div className="hidden lg:flex items-center gap-5">
                    <div className='flex gap-3'>
                        <button className='hover:text-[#ECD06F] underline hover:drop-shadow-md'>EN</button>
                        <button className='hover:text-[#ECD06F] hover:drop-shadow-md'>FR</button>
                    </div>
                    <a href="/resume.pdf" download="yassineZerouali_resume.pdf" className="border flex gap-2 border-2 px-4 py-2 text-black rounded bg-[#ECD06F] hover:bg-white hover:drop-shadow-md">
                        <p>Resume</p>
                        <MdOutlineCloudDownload size={16} className='m-auto'/>
                    </a>
                </div>
            </nav>

            {/* Mobile Menu Modal */}
            {isMenuOpen && (
                <div className="fixed z-20 inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-6 text-white text-2xl">
                    <button onClick={toggleMenu} className="absolute hover:cursor-pointer top-5 right-5 text-3xl">
                        <AiOutlineClose />
                    </button>
                    <NavLink onClick={toggleMenu} className="hover:text-[#ECD06F]" to="/">Home</NavLink>
                    <a onClick={toggleMenu} className="hover:text-[#ECD06F]" href="#about">About</a>
                    <a onClick={toggleMenu} className="hover:text-[#ECD06F]" href="#work">Work</a>
                    <NavLink onClick={toggleMenu} className="hover:text-[#ECD06F]" to="/contact">Contact</NavLink>
                    <div className='flex gap-3'>
                        <button className='hover:text-[#ECD06F] underline'>EN</button>
                        <button className='hover:text-[#ECD06F]'>FR</button>
                    </div>
                    <a href="/resume.pdf" download="yassineZerouali_resume.pdf" className="border flex gap-2 px-4 py-2 text-black rounded bg-[#ECD06F] hover:bg-white">
                        <p>Resume</p>
                        <MdOutlineCloudDownload size={16} className='m-auto'/>
                    </a>
                </div>
            )}
        </div>
    );
}

export default Navbar;
