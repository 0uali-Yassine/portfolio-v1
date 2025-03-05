import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useGlobalContext } from '../Context';

function Footer() {
    const { language } = useGlobalContext();
    
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                
                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold">YZ<span className='text-[#ECD06F]'>ERO</span></h2>
                    <p className="text-gray-400"><span className='text-[#ECD06F]'>Email</span>: <a href="mailto:yassinzerouali0@gmail.com" className="hover:text-[#ECD06F]">yassinzerouali0@gmail.com</a></p>
                </div>

                <div className="flex gap-5 mt-4 md:mt-0">
                    <a href="https://github.com/0uali-Yassine" target="_blank" rel="noopener noreferrer" className="hover:text-[#ECD06F] transition duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/yassinezerouali/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ECD06F] transition duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ECD06F] transition duration-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://www.instagram.com/_yassinezer/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#ECD06F] transition duration-300">
                        <FaInstagram size={24} />
                    </a>
                </div>

                <p className="text-gray-500 text-sm mt-4 md:mt-0">&copy; {new Date().getFullYear()} Yassine Zerouali.  {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</p>

            </div>
        </footer>
    );
}

export default Footer;
