import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const BlogDetails = ({post}) => {

    const {darkMode} = useContext(AppContext);

  return (

    <div className={`space-y-2 border-2 border-solid px-4 py-4 rounded-md border-[#1e1e1e] hover:shadow-lg transition-all duration-200 ${darkMode? ("border-[#FAF9F6] transition-all duration-200") : ("border-[#1e1e1e] transition-all duration-200")}}`}>
        <NavLink to={`/blogs/${post.id}`}>
            <span className='font-bold text-[1.3rem]'>{post.title}</span>
        </NavLink>
        <div>
            <p>
                By {" "}
                <span className='italic'>{post.author} </span>
                on {" "}
                <NavLink to={`/categories/${post.category.replaceAll(" " , "-")}`}>
                    <span className='border-dotted border-b-2 font-bold'>{post.category}</span>
                </NavLink>
            </p>
            <p>
                Posted On {post.date}
            </p>
        </div>
        <p className='text-[1.2rem]'>
            {post.content}
        </p>
        <div>
            {post.tags.map((tag,index)=>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(" " , "-" )}`}>
                    <span className='text-blue-700 underline space-x-2'>{`#${tag}`} </span>{/** */}
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails