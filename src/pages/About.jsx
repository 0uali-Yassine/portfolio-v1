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
      <h3>/ About</h3>
      <h1>gdkgzd</h1>
      <div className='' style={{ width: '70%' }}>
        <p className='w-70' style={{ marginTop: '20px' }}>Front-End Developer specializing in <span style={{ color: '#ECD06F' }}>React</span>, with expertise in <span style={{ color: '#ECD06F' }}>HTML</span>,
          <span style={{ color: '#ECD06F' }}>CSS</span>, and <span style={{ color: '#ECD06F' }}>JavaScript</span> . Focused on building <span style={{ textDecoration: 'underline', textDecorationColor: '#ECD06F' }}>responsive </span>
          and <span style={{ textDecoration: 'underline', textDecorationColor: '#ECD06F' }}>user-friendly web applications</span>.
        </p>
      </div>
      <div>
      <TiHtml5 />
      <IoLogoCss3 />
      <FaSquareJs />
      <RiTailwindCssFill />
      <FaBootstrap />
      <FaReact />
      <FaGithub />
      <FaGitAlt />
      <IoLogoFirebase />
      <HiCommandLine />
      </div>
    </div>
  )
}

export default About