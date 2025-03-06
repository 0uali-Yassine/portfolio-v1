import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineCloudDownload } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineLightMode,MdNightlightRound } from "react-icons/md";
import { useGlobalContext } from '../Context';


function Navbar() {
    const { language, setLanguage,setTheme, theme} = useGlobalContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang); 
        setIsMenuOpen(false); //bgTheme
    };

    return (
        <div className={`p-5 text-xl big-shoulders' ${theme ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <nav className="flex justify-between items-center">
                <a className="text-3xl" href="#">YZ<span className='text-[#ECD06F]'>ERO</span></a>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-3xl hover:cursor-pointer">
                        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>

                <ul className="hidden lg:flex justify-between items-center gap-5">
                    <li className="nav-item hover:text-[#ECD06F] hover:drop-shadow-md">
                        <NavLink className="nav-link" to="/">{language === 'en' ? 'Home' : 'Accueil'}</NavLink>
                    </li>
                    <li className="nav-item hover:text-[#ECD06F] hover:drop-shadow-md">
                        <a className="nav-link" href="#about">{language === 'en' ? 'About' : 'À propos'}</a>
                    </li>
                    <li className="nav-item hover:text-[#ECD06F] hover:drop-shadow-md">
                        <a className="nav-link" href="#work">{language === 'en' ? 'Work' : 'Projets'}</a>
                    </li>
                    <li className="nav-item hover:text-[#ECD06F] hover:drop-shadow-md">
                        <NavLink className="nav-link" to="/contact">{language === 'en' ? 'Contact' : 'Contactez-moi'}</NavLink>
                    </li>
                </ul>


                <div className="hidden lg:flex items-center gap-5">
                    <div className=' p-2 rounded hover:drop-shadow-md drop-shadow-lg hover:cursor-pointer' onClick={() => setTheme(prev =>!prev)} >
                        {
                            theme ? <MdOutlineLightMode/> : <MdNightlightRound/>
                        }
                    </div>

                    <div className='flex gap-3'>
                        <button
                            onClick={() => handleLanguageChange('en')}
                            className={`hover:text-[#ECD06F] hover:cursor-pointer ${language === 'en' ? 'underline' : ''}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => handleLanguageChange('fr')}
                            className={`hover:text-[#ECD06F] hover:cursor-pointer ${language === 'fr' ? 'underline' : ''}`}
                        >
                            FR
                        </button>
                    </div>
                    <a href="/resume.pdf" download="yassineZerouali_resume.pdf" className="border flex gap-2 border-2 px-4 py-2 text-black rounded bg-[#ECD06F] hover:bg-white hover:drop-shadow-md">
                        <p>{language === 'en' ? 'Resume' : 'CV'}</p>
                        <MdOutlineCloudDownload size={16} className='m-auto' />
                    </a>
                </div>
            </nav>

            {isMenuOpen && (
                <div className={`fixed z-20 inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-6 text-white text-2xl`}>
                    <button onClick={toggleMenu} className="absolute hover:cursor-pointer top-5 right-5 text-3xl">
                        <AiOutlineClose />
                    </button>
                    <NavLink onClick={toggleMenu} className="hover:text-[#ECD06F]" to="/">{language === 'en' ? 'Home' : 'Accueil'}</NavLink>
                    <a onClick={toggleMenu} className="hover:text-[#ECD06F]" href="#about">{language === 'en' ? 'About' : 'À propos'}</a>
                    <a onClick={toggleMenu} className="hover:text-[#ECD06F]" href="#work">{language === 'en' ? 'Work' : 'Projets'}</a>
                    <NavLink onClick={toggleMenu} className="hover:text-[#ECD06F]" to="/contact">{language === 'en' ? 'Contact' : 'Contactez-moi'}</NavLink>
                    <div className=' p-2 rounded hover:drop-shadow-md drop-shadow-lg hover:cursor-pointer' onClick={() => setTheme(prev =>!prev)} >
                        {
                            theme ? <MdOutlineLightMode/> : <MdNightlightRound/>
                        }
                    </div>
                    <div className='flex gap-3'>
                        <button
                            onClick={() => handleLanguageChange('en')}
                            className={`hover:text-[#ECD06F] ${language === 'en' ? 'underline' : ''}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => handleLanguageChange('fr')}
                            className={`hover:text-[#ECD06F] ${language === 'fr' ? 'underline' : ''}`}
                        >
                            FR
                        </button>
                    </div>
                    <a href="/resume.pdf" download="yassineZerouali_resume.pdf" className="border flex gap-2 px-4 py-2 text-black rounded bg-[#ECD06F] hover:bg-white">
                        <p>{language === 'en' ? 'Resume' : 'CV'}</p>
                        <MdOutlineCloudDownload size={16} className='m-auto' />
                    </a>
                </div>
            )}
        </div>
    );
}

export default Navbar;