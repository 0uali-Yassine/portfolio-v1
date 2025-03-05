import React, { createContext, useContext, useState} from 'react';

const myContext = createContext();

function Context({children}) {
    const [language, setLanguage] = useState('en');

  return (
    <myContext.Provider value={{setLanguage, language}}>
        {children}
    </myContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(myContext);
}

export default Context;