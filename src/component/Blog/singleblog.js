import React, { Component } from 'react';
import blog2 from "../../Assets/blog2.jpg";
class 
SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="container marginheader">
                <h6 className="text-center ">Blog</h6>
                <img className="rounded mx-auto d-block" src={blog2} alt="images" width="80%" height="80%"/>
                <div>
                    <p></p>
                </div>
            </div>
         );
    }
}
 
export default SingleBlog;