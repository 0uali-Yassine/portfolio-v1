import React, { createContext, useContext, useState} from 'react';

const myContext = createContext();

function Context({children}) {
    const [language, setLanguage] = useState('en');
    const [theme, setTheme] = useState(true);

  return (
    <myContext.Provider value={{setLanguage, language,setTheme, theme}}>
        {children}
    </myContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(myContext);
}

export default Context;