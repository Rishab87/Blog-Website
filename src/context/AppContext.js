import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading , setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);
    const [darkMode , setDarkMode] = useState(true);
    const navigate = useNavigate();

    //data filling
    async function fetchBlogPosts(page , tag , category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url+= `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        console.log(url)
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            alert("Could not fetch data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        navigate({search: `?page=${page}`});
        setPage(page);
        
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
        darkMode,
        setDarkMode
    }; 
    return <AppContext.Provider value={value}> 
        {children}
    </AppContext.Provider>
};