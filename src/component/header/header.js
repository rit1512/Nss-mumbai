import React, { Component } from 'react';
import video from "../../Assets/1.mp4";
import poster from "../../Assets/poster.jpg";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Badge,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import '../../style/style.css'
class Header extends Component {
        state={
        header:"header",
        isopen:false
        }

     Scroll=()=>{
        if (window.scrollY > 70) {
            return this.setState({header:"header2"});
          } else  {
            return this.setState({header:"header"});
          }
    }
  
    toggle=()=>{
      this.setState({isopen : !this.state.isopen})
    }

    componentDidMount(){
     window.addEventListener('scroll', this.Scroll);
   
     
    }
    render () {
        return (
            <div className="d-flex flex-column">
                <Navbar  className={this.state.header} light expand="md">
                <NavbarToggler onClick={this.toggle} style={{color:"white"}}>
                  <FontAwesomeIcon  icon= {faBars} color="white" size="lg"/>
                  </NavbarToggler>
            <NavbarBrand  href="/"><img src={logo} width="150px" height="100px"/></NavbarBrand>

        
            <Collapse right isOpen={this.state.isopen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Achievement</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Event</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Join now</NavLink>
                </NavItem>
              <Button color="primary"><Badge color="primary">Donate US</Badge></Button>
              </Nav>
            
            </Collapse>
          </Navbar>
            <div  className="videoclassName" >        
      <video  autoPlay loop muted style={{width: "100%"}} poster={poster}>
        <source src={video}  type="video/mp4" />
      </video>
    
    </div>
          </div>  
        )

    }
}


export default Header;

