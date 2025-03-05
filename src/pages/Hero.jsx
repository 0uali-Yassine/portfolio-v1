import React, { useState } from 'react';
import me from '../assets/images/Ego-removebg-preview.png';

function Hero() {
  const [newPosition,setNewPosition] = useState({x:0,y:0});
    const onMousePostion = e =>{
        setNewPosition({x:e.clientX,y:e.clientY});
    }

    const onMousePositionLeave = ()=>{
        setNewPosition({x:0,y:0});
    }
  return (
    <div className='p-5'>
      <p className='w-[80%] p-5 text-xl'>👋, Is <span className='underline underline-offset-[3px] decoration-[#ECD06F]'>Yassine</span> and i'm</p>
      <div className='relative text-8xl  m-auto w-[80%]'>
        <h1 className='font-[Oakside] absolute left-[10%] text-center text-border drop-shadow-lg'>Front-end</h1>
        <div className="" style={{
            transform: `translate(${newPosition.x / 15}px, ${newPosition.y /  15}px) rotateX(${newPosition.y / -80}deg) rotateY(${newPosition.x / -80}deg)`,
            cursor:'pointer'}}  onMouseMove={onMousePostion} onMouseLeave={onMousePositionLeave} >
          <img src={me} alt="me" className='m-auto drop-shadow-lg' />
                
            </div>
        <h2 className='font-[Oakside] text-center'>developer</h2>
      </div>
      <p className=' p-5  '>📍 Based in Casablanca, Morocco 🇲🇦.</p>
    </div>
  )
}

export default Hero