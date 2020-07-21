import React, { Component } from 'react';

import logo from "../../Assets/logo.png";
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
class MainHeader extends Component {
        state={
        header:"header",
        isopen:false
        }

  
    toggle=()=>{
      this.setState({isopen : !this.state.isopen})
    }

    componentDidMount(){
    
   
     
    }
    render () {
        return (
            <div >
                <Navbar  className="header2" light expand="md">
               
            <NavbarBrand  href="/"><img src={logo} width="200px" height="100px"/></NavbarBrand>
            <NavbarToggler onClick={this.toggle} style={{color:"white"}} />
            <Collapse isOpen={this.state.isopen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Achievement</NavLink>
                  <NavItem>
                  <NavLink href="">Event</NavLink>
                </NavItem>
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
          
          </div>  
        )

    }
}


export default MainHeader;

