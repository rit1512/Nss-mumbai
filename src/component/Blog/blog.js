import React, { Component } from 'react';
import blog1 from "../../Assets/blog1.jpg";
import blog2 from "../../Assets/blog2.jpg";
import blog3 from "../../Assets/blog3.jpg";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row
} from 'reactstrap';
import {Link} from "react-router-dom";

class Blog extends Component{
    render () {
    return (
        <div className="container mb-5">
            <h4 className="text-center text-primary font-weight m-3">Blog</h4>
            <div className="card-columns">
      <div className="row ">
        <Link className="cardcss" to="/singleblog">
        <Card className="mb-2">
          <CardImg  top width="100%" src={blog1} alt="Card image cap" />
          <CardBody>
            <CardTitle>GRAVITATIONAL LENSING</CardTitle>
 
            <CardText>In the early 1900s the great German physicist Albert Einstein gave his groundbreaking theory of
relativity. In the theory, he predicted that space and time is not what we had always perceived,
rather, it is a 4-dimensional net-a fabric of spacetime<br/><small className="d-flex justify-content-end">By AYUSHI MISHRA</small></CardText>
           
          </CardBody>
        </Card>
        </Link>
        
        <Link className="cardcss" to="singleblog2">
        <Card className="mb-2">
          <CardImg top width="100%" src={blog2} alt="Card image cap" />
          <CardBody>
            <CardTitle>SPACE SETTLEMENT</CardTitle>
 
            <CardText>Playing cricket where when the batsman hardly needs to hit the ball. He touches it with two of his
fingers and the ball floats off. The fielder, floats towards the ball to catch it. Yeah, an imaginary
world. Gravity keeps us grounded here on earth. But what about living in outer space? Is it possible?
When? And how?spacetime<br/><small className="d-flex justify-content-end">By AYUSHI MISHRA</small></CardText>
           
          </CardBody>
        </Card>
        </Link>
        <Link className="cardcss" to="singleblog3">
        <Card className="mb-2">
          <CardImg top width="100%" src={blog3} alt="Card image cap" />
          <CardBody>
            <CardTitle>FUTURE OF SPACE EXPLORATION</CardTitle>
 
            <CardText>After a tiring day with a lot of playing and climbing trees and running from his mother, the child lay
down in his garden at night to get some sleep. His ritual was to count the twinkling, shiny objects in
the sky and dream about visiting those once. <small className="d-flex justify-content-end">By AYUSHI MISHRA</small> </CardText>
           
          </CardBody>
        </Card>
      </Link>
      
      </div>
    </div>
      <Button  className="mb-3" style={{float:"right"}} >View More</Button>
    
   </div>
    );
  };
}
  
  export default Blog;