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
import {
  Route
} from "react-router-dom";
import Home from './component/home/home';
import SingleBlog2 from './component/Blog/singleblog2';
import SingleBlog3 from './component/Blog/singleblog3';

function App() {
  return (
    <div >
       <Route path="/singleblog3" exact component={SingleBlog3}/>
      <Route path="/singleblog2" exact component={SingleBlog2}/>
    <Route path="/singleblog" exact component={SingleBlog}/>
    <Route path="/" exact component={Home}/>
    </div>
  );
}

export default App;
