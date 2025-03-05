import React, { useState} from 'react';
import data from '../data';
import { FaGithub } from 'react-icons/fa6';
import { MdOpenInBrowser } from "react-icons/md";
import { useGlobalContext } from '../Context';

function Work() {
  const [newData, setNewData] = useState(data);
  const { language } = useGlobalContext();

  const filterData = (category) => {
    if (category === 'all') return setNewData(data); // just return all  data ;)

    setNewData(data?.filter((item) => item.category === category));
  };

  return (
    <div className='p-6'>
      <h3 id='work' className='text-2xl font-bold'>
        {language === 'en' ? '/ Work' : '/ Projets'}
      </h3>
      <hr className='h-[3px] bg-[#ECD06F] w-50 font-bold' />

      <div className="flex flex-wrap md:flex-nowrap items-center gap-3 p-5">
        <p className="text-xl">{language === 'en' ? 'Filter:' : 'Filtrer :'}</p>
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-2 sm:gap-3">
          <button
            onClick={() => filterData("all")}
            className="text-[#ECD06F] border-2 border-black rounded-sm hover:bg-[#ECD06F] hover:text-black px-4 py-2 hover:cursor-pointer transition"
          >
            {language === 'en' ? 'All' : 'Tous'}
          </button>
          <button
            onClick={() => filterData("e-commerce")}
            className="text-[#ECD06F] border-2 border-black rounded-sm hover:bg-[#ECD06F] hover:text-black px-4 py-2 hover:cursor-pointer transition"
          >
            {language === 'en' ? 'E-commerce' : 'E-commerce'}
          </button>
          <button
            onClick={() => filterData("chat-app")}
            className="text-[#ECD06F] border-2 border-black rounded-sm hover:bg-[#ECD06F] hover:text-black px-4 py-2 hover:cursor-pointer transition"
          >
            {language === 'en' ? 'Chat App' : 'Application de chat'}
          </button>
          <button
            onClick={() => filterData("admin-dashboard")}
            className="text-[#ECD06F] border-2 border-black rounded-sm hover:bg-[#ECD06F] hover:text-black px-4 py-2 hover:cursor-pointer transition"
          >
            {language === 'en' ? 'Admin Dashboard' : 'Tableau de bord admin'}
          </button>
          <button
            onClick={() => filterData("e-learning")}
            className="text-[#ECD06F] border-2 border-black rounded-sm hover:bg-[#ECD06F] hover:text-black px-4 py-2 hover:cursor-pointer transition"
          >
            {language === 'en' ? 'E-learning Platform' : 'Plateforme e-learning'}
          </button>
          <button
            onClick={() => filterData("landing-page")}
            className="text-[#ECD06F] border-2 border-black rounded-sm hover:bg-[#ECD06F] hover:text-black px-4 py-2 hover:cursor-pointer transition"
          >
            {language === 'en' ? 'Landing Page' : 'Page de destination'}
          </button>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto place-items-center grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-10 gap-4'>
        {newData?.map((project) => {
          const { id, name, title, technology, category, image, github } = project;
          return (
            <div key={id} className='w-[300px] border rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-gray-400'>
              <img src={image} className="w-full h-[120px] object-cover" alt={name} />
              <div className="p-3 bg-white">
                <h5 className="font-bold text-center text-lg text-gray-800">{name}</h5>
                <p className="text-[14px] text-gray-600 mt-1">{title}</p>
                <div className="text-center flex items-center mt-2">
                  <a href={github}>
                    <FaGithub size={40} className="px-2 py-1 text-black rounded-md shadow-md hover:bg-black hover:text-white transition" />
                  </a>
                  {category === 'e-learning' && (
                    <a href="https://www.codecraftcademy.com/" target='_blank' rel="noopener noreferrer">
                      <MdOpenInBrowser size={40} className="px-2 py-1 text-black rounded-md shadow-md hover:bg-black hover:text-white transition" />
                    </a>
                  )}
                </div>
                <div className='flex gap-3'>
                  <p>{language === 'en' ? 'Tech:' : 'Technologies :'}</p>
                  <div className='flex gap-3'>
                    {technology?.map((tech, index) => (
                      <span key={index} className='text-gray-500 hover:cursor-pointer hover:text-[#ECD06F]'>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;