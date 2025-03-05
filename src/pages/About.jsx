import React from 'react';
import { FaBootstrap, FaGitAlt, FaGithub, FaReact, FaSquareJs } from 'react-icons/fa6';
import { IoLogoCss3 } from 'react-icons/io';
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from 'react-icons/io5';
import { HiCommandLine } from 'react-icons/hi2';

function About() {
  return (
    <div className='p-5'>
      <h3 id="about" className='text-2xl font-bold'>/ About</h3>
      <hr className='h-[3px] bg-[#ECD06F] w-50 font-bold' />

      <div className='mb-5 p-5 '>
        <p className='mt-5 max-w-3xl mx-auto text-lg text-center lg:text-center'>
          <span className='underline decoration-[#ECD06F]'>Front-End Developer</span> with a growing foundation in <span className='text-[#ECD06F]'>React</span>, with strong proficiency in
          <span className='text-[#ECD06F]'> HTML</span>, <span className='text-[#ECD06F]'>CSS</span>, and <span className='text-[#ECD06F]'>JAVASCRIPT</span>. Passionate about creating <span className='text-[#ECD06F] underline decoration-black'>responsive, user-friendly</span> web applications and developing scalable solutions.
          <br />
          With experience in building dynamic, performance-optimized interfaces, I aim to deliver high-quality code and seamless user experiences.
        </p>
      </div>

      <p className='text-lg mt-5 p-5 text-center sm:text-left'><span className='text-[#ECD06F] text-2xl'>{`> `}</span> Technologies I have been working with:</p>

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
  )
}

export default About