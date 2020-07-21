import React, { Component } from 'react';
import blog1 from "../../Assets/blog2.jpg";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row
} from 'reactstrap';

class Event extends Component{
    render () {
    return (
      <div className="container mb-3">
            <h4 className="text-center text-primary font-weight m-3">Event</h4>
            <div className="card-columns">
      <div className="row">
        <Card className="mb-2">
          <CardImg top width="100%" src={blog1} alt="Card image cap" />
          <CardBody>
            <CardTitle>The Planets and Moons of Star Wars to Scale</CardTitle>
 
            <CardText>I like Star Wars, Star Wars is set in space, my website is about space, hence I made a Star Wars thing for the website.</CardText>
           
          </CardBody>
        </Card>
        <Card className="mb-2">
          <CardImg top width="100%" src={blog1} alt="Card image cap" />
          <CardBody>
            <CardTitle>The Planets and Moons of Star Wars to Scale</CardTitle>
 
            <CardText>I like Star Wars, Star Wars is set in space, my website is about space, hence I made a Star Wars thing for the website.</CardText>
           
          </CardBody>
        </Card>
        <Card className="mb-2">
          <CardImg top width="100%" src={blog1} alt="Card image cap" />
          <CardBody>
            <CardTitle>The Planets and Moons of Star Wars to Scale</CardTitle>
 
            <CardText>I like Star Wars, Star Wars is set in space, my website is about space, hence I made a Star Wars thing for the website.</CardText>
           
          </CardBody>
        </Card>
      
      </div>
      </div>
      <Button  style={{float:"right"}} >View More</Button>
   
   </div>
    );
  };
}
  
  export default Event;