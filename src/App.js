import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header.js';
import Blog from './component/Blog/blog';
import SingleBlog from './component/Blog/singleblog'
import Event from './component/event/event';
import Footer from './component/footer/footer';
import MainHeader from './component/header/mainheader';
import SingleEvent from './component/event/singleEvent';
import TABS from './component/Tab/tabs';
import Gallery from './component/gallery/gallery';

function App() {
  return (
    <div >
     <Header/>
     {/* <MainHeader/> */}
     <TABS/>
      <Blog/>
     <Event/>
   
        {/* <SingleBlog/> */}
    {/* <SingleEvent/> */}
     <Footer/>
    </div>
  );
}

export default App;
