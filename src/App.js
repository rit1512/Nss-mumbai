import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header.js';
import Blog from './component/Blog/blog';
import Event from './component/event/event';
import Footer from './component/footer/footer';

function App() {
  return (
    <div >
     <Header/>
     <Blog/>
     <Event/>
     <Footer/>
    </div>
  );
}

export default App;
