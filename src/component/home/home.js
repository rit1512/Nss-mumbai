import React, { Component } from 'react';
import Header from '../header/header';
import TABS from '../Tab/tabs';
import Blog from '../Blog/blog';
import Event from '../event/event';
import Footer from '../footer/footer';

class Home extends Component{
render (){
    return(
        <div>
        <Header/>
        <TABS/>
        <Blog/>
        <Event/>
        <Footer/>

      </div>
    )
}

} 

export default Home;