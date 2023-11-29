import React, { useContext } from 'react'
import { CiLight , CiDark } from "react-icons/ci";
import { AppContext } from '../context/AppContext';

const Header = () => {
  const {darkMode , setDarkMode} = useContext(AppContext);

  function darkModeHandler(){
    if(darkMode){
      setDarkMode(false);
    }
    else{
      setDarkMode(true);
    }
  }
  return (
    <div className={`w-full flex items-center justify-center h-[7vh] shadow-md fixed top-0 ${darkMode? ("bg-[#1e1e1e] text-[#FAF9F6] transition-all duration-200 dark-mode-shadow") : ("bg-[#FAF9F6] text-[#1e1e1e] transition-all duration-200")}`}>
        <header className='flex w-[90%] max-w-[700px] justify-between'>
            <h1 className='opacity-0'>d</h1>
            <h1 className='font-bold text-2xl'>BLOG WEBSITE</h1>
            { darkMode? (<CiDark className={`text-[1.8rem] transition-all cursor-pointer duration-200 ease-linear ${darkMode? ("opacity-100") : ("opacity-0")}`} onClick={darkModeHandler}/>):(<CiLight className={`text-[1.8rem] transition-opacity ease-linear cursor-pointer duration-200 ${darkMode? ("opacity-0") : ("opacity-100")}`} onClick={darkModeHandler}/>)}
        </header>
    </div>
  )
}

export default Header