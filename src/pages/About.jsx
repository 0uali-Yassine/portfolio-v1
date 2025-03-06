import React from 'react';
import { FaBootstrap, FaGitAlt, FaGithub, FaReact, FaSquareJs } from 'react-icons/fa6';
import { IoLogoCss3 } from 'react-icons/io';
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from 'react-icons/io5';
import { HiCommandLine } from 'react-icons/hi2';
import { useGlobalContext } from '../Context';

function About() {
  const { language, theme } = useGlobalContext();
  return (
    <div className={`${theme ? 'bg-white text-black' : 'bg-black text-white'} p-5`}>
      <h3 id="about" className='text-2xl font-bold'>
        {language === 'en' ? '/ About' : '/ À propos'}
      </h3>
      <hr className='h-[3px] bg-[#ECD06F] w-50 font-bold' />

      <div className='mb-5 p-5'>
        <p className='mt-5 max-w-3xl mx-auto text-lg text-center lg:text-center'>
          {language === 'en' ? (
            <>
              <span className='underline decoration-[#ECD06F]'>Front-End Developer</span> with a growing foundation in <span className='text-[#ECD06F]'>React</span>, with strong proficiency in
              <span className='text-[#ECD06F]'> HTML</span>, <span className='text-[#ECD06F]'>CSS</span>, and <span className='text-[#ECD06F]'>JAVASCRIPT</span>. Passionate about creating <span className='text-[#ECD06F] underline decoration-black'>responsive, user-friendly</span> web applications and developing scalable solutions.
              <br />
              With experience in building dynamic, performance-optimized interfaces, I aim to deliver high-quality code and seamless user experiences.
            </>
          ) : (
            <>
              <span className='underline decoration-[#ECD06F]'>Développeur Front-End</span> avec une base solide en <span className='text-[#ECD06F]'>React</span>, une forte maîtrise de
              <span className='text-[#ECD06F]'> HTML</span>, <span className='text-[#ECD06F]'>CSS</span>, et <span className='text-[#ECD06F]'>JAVASCRIPT</span>. Passionné par la création d'applications web <span className='text-[#ECD06F] underline decoration-black'>responsives et conviviales</span>, ainsi que par le développement de solutions évolutives.
              <br />
              Avec de l'expérience dans la construction d'interfaces dynamiques et optimisées pour les performances, je vise à fournir un code de haute qualité et des expériences utilisateur fluides.
            </>
          )}
        </p>
      </div>

      <p className='text-lg mt-5 p-5 text-center sm:text-left'>
        <span className='text-[#ECD06F] text-2xl'>{`> `}</span>
        {language === 'en' ? 'Technologies I have been working with:' : 'Technologies avec lesquelles j\'ai travaillé :'}
      </p>

      <div className='mt-5 grid grid-cols-3 sm:grid-cols-5 gap-5 justify-items-center p-5'>
        <TiHtml5 size={40} className='hover:text-orange-600 hover:scale-125 transition duration-200 ease-in-out' />
        <IoLogoCss3 size={40} className='hover:text-blue-500 hover:scale-125 transition duration-200 ease-in-out' />
        <FaSquareJs size={40} className='hover:text-yellow-400 hover:scale-125 transition duration-200 ease-in-out' />
        <RiTailwindCssFill size={40} className='hover:text-cyan-400 hover:scale-125 transition duration-200 ease-in-out' />
        <FaBootstrap size={40} className='hover:text-purple-400 hover:scale-125 transition duration-200 ease-in-out' />
        <FaReact size={40} className='hover:text-sky-400 hover:scale-125 transition duration-200 ease-in-out' />
        <FaGithub size={40} className='hover:text-gray-600 hover:scale-125 transition duration-200 ease-in-out' />
        <FaGitAlt size={40} className='hover:text-red-500 hover:scale-125 transition duration-200 ease-in-out' />
        <IoLogoFirebase size={40} className='hover:text-amber-400 hover:scale-125 transition duration-200 ease-in-out' />
        <HiCommandLine size={40} className='text-black hover:text-gray-400 hover:scale-125 transition duration-200 ease-in-out' />
      </div>
    </div>
  );
}

export default About;