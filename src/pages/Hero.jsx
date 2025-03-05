import React, { useState} from 'react';
import me from '../assets/images/Ego-removebg-preview.png';
import { useGlobalContext } from '../Context';

function Hero() {
  const [newPosition, setNewPosition] = useState({ x: 0, y: 0 });
  const { language } = useGlobalContext();

  const onMousePostion = (e) => {
    setNewPosition({ x: e.clientX, y: e.clientY });
  };

  const onMousePositionLeave = () => {
    setNewPosition({ x: 0, y: 0 });
  };

  return (
    <div className='p-5 flex flex-col items-center justify-center min-h-screen'>
      <p className='w-full md:w-[80%] p-5 text-lg md:text-xl text-left'>
        {language === 'en' ? (
          <>👋, Is <span className='underline underline-offset-[3px] decoration-[#ECD06F]'>Yassine</span> and I'm</>
        ) : (
          <>👋, Je suis <span className='underline underline-offset-[3px] decoration-[#ECD06F]'>Yassine</span> et je suis</>
        )}
      </p>
      <div className='relative text-4xl md:text-6xl lg:text-8xl w-full md:w-[80%] text-center'>
        <h1 className='font-[Oakside] absolute left-[10%] text-center text-border drop-shadow-lg'>
          {language === 'en' ? 'Front-end' : 'Développeur'}
        </h1>
        <div
          className="transform transition-transform duration-200 ease-in-out"
          style={{
            transform: `translate(${newPosition.x / 15}px, ${newPosition.y / 15}px) rotateX(${newPosition.y / -80}deg) rotateY(${newPosition.x / -80}deg)`,
            cursor: 'pointer',
          }}
          onMouseMove={onMousePostion}
          onMouseLeave={onMousePositionLeave}
        >
          <img src={me} alt="me" className='m-auto drop-shadow-lg w-48 md:w-64 lg:w-80' />
        </div>
        <h2 className='font-[Oakside] text-center'>
          {language === 'en' ? 'developer' : 'front-end'}
        </h2>
      </div>
      <p className='p-5 w-full md:w-[80%] text-lg md:text-xl text-end'>
        {language === 'en' ? '📍 Based in Casablanca, Morocco 🇲🇦.' : '📍 Basé à Casablanca, Maroc 🇲🇦.'}
      </p>
    </div>
  );
}

export default Hero;