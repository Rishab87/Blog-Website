import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog?";
    const [blog,setBlog] = useState(null);
    const [relatedBlogs , setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading , loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Errorrrrrrr");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

  return (
    <div>
        <Header/>
        <div className='mt-[10vh] w-[700px] mx-auto'>
            <button className='text-md font-bold rounded-md px-5 py-2 shadow-md border-solid border-slate-300 border-2 hover:bg-[#1e1e1e] hover:transition-all hover:text-white hover:duration-200 transition-all duration-200' onClick={()=> navigation(-1)}>
            Back
            </button>
        </div>

        <div className='flex flex-col space-y-4 mt-[20px] w-[90%] max-w-[700px] mx-auto mb-[20px]'>
            {
            loading? (<Spinner/>) : blog? 
            (<div>
            <BlogDetails post = {blog}/>
            <h2 className='font-bold text-[1.8rem] mt-[20px] mb-[10px]'>Related Blogs:</h2>
            {
                relatedBlogs.map((post)=> (
                    <div key={post.id}>
                    <BlogDetails post ={post}/>
                </div>))
            }
            </div>):
            (<p>No blog found</p>)
            }
        </div>

    </div>
  )
}

export default BlogPage