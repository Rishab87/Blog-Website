import React from 'react'
import Pageination from '../components/Pageination'
import Header from '../components/Header'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div>
        <Header/>
        <Blogs/>
        <Pageination/>
    </div>
  )
}

export default Home