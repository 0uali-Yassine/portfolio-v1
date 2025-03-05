import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Contact from './component/Contact';
import { useEffect, useState } from 'react';

function App() {

  const [showLoaderOne, setShowLoaderOne] = useState(true);
  const [showLoaderTwo, setShowLoaderTwo] = useState(true);
  const [showLoaderThree, setShowLoaderThree] = useState(true);

  useEffect(() => {
    const timerOne = setTimeout(() => setShowLoaderOne(false), 2000);
    const timerTwo = setTimeout(() => setShowLoaderTwo(false), 3000);
    const timerThree = setTimeout(() => setShowLoaderThree(false), 4000);
  
    return () => {
      clearTimeout(timerOne);
      clearTimeout(timerTwo);
      clearTimeout(timerThree);
    };
  }, []);

 

  return (
    <div className="relative overflow-hidden">
      <div className={`absolute bg-black w-[100vw] z-11 h-[100vh] flex justify-center items-center transition-transform duration-1000 ${
            !showLoaderOne ? '-translate-y-[100%]' : 'translate-y-0'
          }`}>
        <h3 className='text-white text-5xl text-center mt-[10%]'>YZ</h3>
      </div>

      <div className={`absolute bg-[#ECD06F] w-[100vw] z-10 h-[100vh] flex justify-center items-center transition-transform duration-1000 ${
            !showLoaderTwo ? '-translate-y-[100%]' : 'translate-y-0'
          }`}>
        <h3 className='text-white text-5xl text-center mt-[10%]'>YZ</h3>
      </div>

      <div className={`absolute bg-white w-[100vw] z-9 h-[100vh] flex justify-center items-center transition-transform duration-1000 ${
            !showLoaderThree ? '-translate-y-[100%]' : 'translate-y-0'
          }`}>
        <h3 className='text-black text-5xl text-center mt-[10%]'>YZ</h3>
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
