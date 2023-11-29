import { useContext, useEffect} from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
import { useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { Route , Routes } from "react-router-dom";


export default function App() {
  const {fetchBlogPosts , darkMode} = useContext(AppContext);

  const[searchParams , setSearchParams] = useSearchParams();

  const location = useLocation(); 

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1; 
    if(location.pathname.includes("tags")){ 
      const tag = location.pathname.split("/").at(-1).replace("-" , " ");
      fetchBlogPosts(Number(page) , tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-" , " ");
      fetchBlogPosts(Number(page) ,null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname , location.search]) 
  useEffect(()=>{
    if(darkMode){
      document.body.classList.add("dark");
    }
    else{
      document.body.classList.remove("dark");
    }
  },[darkMode]);

  return(
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/blogs/:blogId" element = {<BlogPage/>}/> 
      <Route path="/tags/:tag" element = {<TagPage/>}/>
      <Route path="/categories/:category" element = {<CategoryPage/>}/>
    </Routes>
  );
};
