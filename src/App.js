import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Contact from './component/Contact';

function App() {
  return (
    <div className="">

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
