import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';
import { useLocation } from 'react-router-dom';

const Blogs = () => {

    //consuming data from context
    const {loading,posts,page} = useContext(AppContext); 
    const location  =useLocation();
  return (
    <div className={`flex flex-col justify-evenly items-center'
     ${(location.pathname.includes("categories") || location.pathname.includes("tags"))?("mb-[10vh] mt-4"):("my-[10vh]")} mx-auto w-[90%] max-w-[700px] space-y-4`}>
    {
        loading? (<Spinner/>):(
            posts.length ===0? (
                <div className='flex flex-col w-100 h-100 items-center justify-center'>
                    <p>No Post Found</p>
                </div>
            ):
            (posts.map((post)=> (
                <BlogDetails key={post.id} post={post}/>
            )))
        )
    }
    </div>
  )
}

export default Blogs