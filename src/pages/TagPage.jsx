import React from 'react'
import Header from '../components/Header'
import { useNavigate , useLocation } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pageination from '../components/Pageination';

const TagPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1); 
  return (
    <div>
        <Header/>
        <div className='mx-auto w-[700px]'>
            <button className='mt-[10vh] text-md font-bold rounded-md px-5 py-2 shadow-md border-solid border-slate-300 border-2 hover:bg-[#1e1e1e] hover:transition-all hover:text-white hover:duration-200 transition-all duration-200 mb-2' onClick={() => navigate(-1)}>
                Back
            </button>
            <h2 className='font-bold text-[1.5rem]'>
                Blogs Tagged <span className='border-b-2 border-black'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pageination/> 
    </div>
  )
}

export default TagPage