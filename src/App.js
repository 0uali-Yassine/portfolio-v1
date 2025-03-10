import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Contact from './component/Contact';
import { useEffect, useState } from 'react';
import { useGlobalContext } from './Context';

function App() {
  const {theme} = useGlobalContext();

  const [showLoaderOne, setShowLoaderOne] = useState(true);
  const [showLoaderTwo, setShowLoaderTwo] = useState(true);
  const [showLoaderThree, setShowLoaderThree] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const timerOne = setTimeout(() => setShowLoaderOne(false), 1500);
    const timerTwo = setTimeout(() => setShowLoaderTwo(false), 2000);
    const timerThree = setTimeout(() => setShowLoaderThree(false), 2500);

    const scrollTimer = setTimeout(() => {
      document.body.style.overflow = "auto"; // Enable scrolling after 2500ms
    }, 2500);
  
    return () => {
      clearTimeout(timerOne);
      clearTimeout(timerTwo);
      clearTimeout(timerThree);
      clearTimeout(scrollTimer);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
    };
  }, []);

 

  return (
    <div className={`relative overflow-hidden ${theme ? 'bg-white' : 'bg-black'}`}>
      <div className={`absolute bg-black w-[100vw] z-11 h-[100vh] flex justify-center items-center transition-transform duration-1000 ${
            !showLoaderOne ? '-translate-y-[100%]' : 'translate-y-0'
          }`}>
        <h3 className='text-white text-5xl text-center mt-[10%]'>YZ <br/> 2 </h3>
      </div>

      <div className={`absolute bg-[#ECD06F] w-[100vw] z-10 h-[100vh] flex justify-center items-center transition-transform duration-1000 ${
            !showLoaderTwo ? '-translate-y-[100%]' : 'translate-y-0'
          }`}>
        <h3 className='text-white text-5xl text-center mt-[10%]'>YZ <br/> 1</h3>
      </div>

      <div className={`absolute bg-white w-[100vw] z-9 h-[100vh] flex justify-center items-center transition-transform duration-1000 ${
            !showLoaderThree ? '-translate-y-[100%]' : 'translate-y-0'
          }`}>
        <h3 className='text-black text-5xl text-center mt-[10%]'>YZ <br/> 0</h3>
      </div>

      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
       </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
