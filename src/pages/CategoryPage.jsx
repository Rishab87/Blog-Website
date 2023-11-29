import React, { useContext } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pageination from '../components/Pageination';
import { AppContext } from '../context/AppContext';

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    const {darkMode} = useContext(AppContext);
    
  return (
    <div>
        <Header/>
        <div className='mt-[10vh] w-[90%] max-w-[700px] mx-auto'>
            <button className={`text-md font-bold rounded-md px-5 py-2 shadow-md border-solid border-slate-300 border-2 hover:bg-[#1e1e1e] hover:transition-all hover:text-white hover:duration-200 transition-all duration-200 ${(darkMode)? ("hover:bg-white hover:text-black") : ("hover:bg-black hover:text-white")}`} onClick={()=> navigate(-1)}>
                Back
            </button>
            <h2 className='mt-2 font-bold text-[1.8rem]'>
                Blogs on <span>{category}:</span>
            </h2>
        </div>
        <Blogs/>
        <Pageination/>
    </div>
  )
}

export default CategoryPage