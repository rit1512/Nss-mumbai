import React, { Component } from 'react';
import logo from "../../Assets/logonew.png"
import "./myteam.css"
import {Link} from "react-router-dom";
import {
  Card, CardImg, CardText,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';


function CustomCard(props){
    return(
      <React.Fragment>
<Card className="customCard" body inverse color="info">
  <div className="text-center">
  <CardTitle>Special Title </CardTitle>
        <CardText>Ravi Sharma.</CardText>
  </div>
      
        <div className="imageContainer">
        <CardImg  src={logo} className="bg-info cardImage border50"/>
        </div>
</Card>
</React.Fragment>
      )
}



function MainCustomCard(props){
  return(
    <div className="container">
<Card className=" flex-row flex-wrap">
<div  className=" card-header  border-0 bg-info">
      <CardImg src={logo}/>
    </div>
    <div  className=" card-block px-2">
      <CardTitle>Hello Ravi</CardTitle>
      <CardSubtitle>Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma Hello Ravi Sharma </CardSubtitle>
    </div>
</Card>
</div>
    )
}

class myteam extends Component{
    render () {
    return (
     <div className="container">
        <div className="text-info text-center">
          <h1>Meet Our Team</h1>
       </div>
       <br/>
        <div  style={{
       
             justifyContent: "center",
             alignItems: "center",
        
       
        }}>
<MainCustomCard/>
    </div>
    <br/>   
        <div className="text-center">
        <h3 className="text-info">An Organisation is made by its team.</h3>
         <p>Meet our rockstars. Working across various parts of group-who have truly made it one of the most exciting place to work and create a differnce!</p>
        </div>
        <Container>
       <Row>
         <Col><CustomCard/></Col>
         <Col><CustomCard/></Col>
         <Col><CustomCard/></Col>
       </Row>
     </Container>
     <br/> 
     <br/> 
     </div>  
    )
  };
}
  
  export default myteam