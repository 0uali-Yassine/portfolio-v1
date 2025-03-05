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

      <div className='mb-[20px] p-5'>
        <p className='mt-[20px] w-[70%] m-auto  text-xl text-center' > <span className='underline' style={{ textDecoration: 'underline', textDecorationColor: '#ECD06F' }}>Front-End Developer </span> with a growing foundation in <span className='text-[#ECD06F]'>React</span>, with strong
          proficiency in <span className='text-[#ECD06F]'>HTML</span>, <span className='text-[#ECD06F]'>CSS</span>, and <span className='text-[#ECD06F]'>JAVASCRIPT</span>. I am passionate about creating <span className='text-[#ECD06F] underline' style={{ textDecorationColor: "black" }}>responsive, user-friendly</span> web applications
          and developing scalable solutions to meet evolving business needs.
          <br /> With experience in building dynamic,
          performance-optimized interfaces,
          I aim to deliver high-quality code and seamless user experiences.
        </p>
      </div>

      <p className='text-xl mt-[20px] p-5'><span className='text-[#ECD06F] text-2xl'>{`> `}</span> Here are some technologies I have been working with:</p>

      <div className='mt-[10px]  flex justify-center p-10 gap-5'>
        <TiHtml5 size={35} className=' hover:text-orange-600 hover:cursor-pointer hover:scale-125 transition delay-10 duration-200 ease-in-out' />
        <IoLogoCss3 size={35} className=' hover:text-blue-500 hover:cursor-pointer hover:scale-125 transition delay-10 duration-200 ease-in-out' />
        <FaSquareJs size={35} className=' hover:text-yellow-400 hover:cursor-pointer hover:scale-125 transition delay-10 duration-200 ease-in-out' />
        <RiTailwindCssFill size={35} className=' hover:text-cyan-400 hover:cursor-pointer hover:scale-125 transition delay-10 duration-200 ease-in-out' />
        <FaBootstrap size={35} className=' hover:text-purple-400 hover:cursor-pointer hover:scale-125 transition delay-10 duration-200 ease-in-out' />
        <FaReact size={35} className=' hover:text-sky-400 hover:cursor-pointer hover:scale-125 transition delay-10 duration-200 ease-in-out' />
        <FaGithub size={35} className=' hover:text-gray-600 hover:cursor-pointer hover:scale-125 transition delay-10 duration-200 ease-in-out' />
        <FaGitAlt size={35} className=' hover:text-red-500 hover:cursor-pointer hover:scale-125 transition delay-10 duration-200 ease-in-out' />
        <IoLogoFirebase size={35} className=' hover:text-amber-400 hover:cursor-pointer hover:scale-10 transition delay-10 duration-200 ease-in-out' />
        <HiCommandLine size={35} className='text-black  hover:text-gray-400 hover:cursor-pointer hover:scale-125 transition delay-10 duration-200 ease-in-out' />
      </div>
    </div>
  )
}

export default About