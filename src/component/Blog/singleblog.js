import React, { Component } from 'react';
import blog1 from "../../Assets/30-percent-offer.jpg";
import logo from "../../Assets/logonew.png";
import MainHeader from '../header/mainheader';
import Footer from '../footer/footer';
class 
SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="" style={{backgroundColor:"#D3D3D3"}}>
            <MainHeader/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
            <div className="row logo ml-2">
                            <div className="logo--img">
                            <img src={logo} alt="" height="50" width="50" className="img-responsive rounded-circle" />
                            </div>
                            
                            <div className="logo--content m-2">
                                <h6>JOHN <strong>DOE</strong></h6>
                                <p>On <strong>UX</strong> Design</p>
                            </div>
                        </div>
            </div>
            <br/>
            
            <div className="col-md-offset-1 col-md-10 col-xs-offset-1 col-xs-10 reset-padding post-title">
                <h2>The best UX technique shopping website</h2>
                <p><i className="fa fa-calendar"></i> 28 Dec, 2015</p>
            </div>
            <div className="container-fluid col-md-12">
               <img className=" img-responsive"  src={blog1} alt="images" width="100%" height="100%"/>
             </div>
             <br/>
            <div className=" col-md-offset-1 col-md-10 col-xs-offset-1 col-xs-10 reset-padding post-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus cupiditate? Excepturi dolor nisi, quibusdam itaque reprehenderit libero.</p>
									
									<p>Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Nulla consequat massa quis enim. In ut quam vitae odio lacinia tincidunt. Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Ut a nisl id ante tempus.</p>
									
									<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam cursus lacinia erat. In hac habitasse platea dictumst. Nullam vel sem. Nullam accumsan lorem in dui. Aenean commodo ligula eget dolor. Nulla sit amet est. Curabitur vestibulum aliquam leo. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Suspendisse faucibus..</p>
									
									<blockquote>
										<p>Aenean ut eros et nisl sagittis vestibulum. Morbi mattis ullamcorper velit. Etiam vitae tortor. Donec posuere vulputate arcu. Nullam accumsan lorem in dui.</p>
									</blockquote>
									
									<p>Suspendisse feugiat. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Etiam feugiat lorem non metus. Vivamus quis mi. Donec vitae sapien ut libero venenatis faucibus. Phasellus gravida semper nisi. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
									
									<ul>
										<li>Consectetur adipiscing elit vtae elit libero</li>
										<li>Nullam id dolor id eget lacinia odio posuere erat a ante</li>
										<li>Integer posuere erat dapibus posuere velit</li>
									</ul>
									
									<p>Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Fusce fermentum odio nec arcu. In auctor lobortis lacus. Fusce vel dui. Praesent turpis. Fusce fermentum odio nec arcu. Aenean commodo ligula eget dolor. Etiam iaculis nunc ac metus. Praesent blandit laoreet nibh. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Ut varius tincidunt libero. Donec id justo.</p>
									
									<p><i>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam at velit nisl. Aenean vitae est nisl. Cras molestie molestie nisl vel imperdiet. Donec vel mi sem.</i></p>
                                </div>
          
            <Footer/>
            </div>
         );
    }
}
 
export default SingleBlog;