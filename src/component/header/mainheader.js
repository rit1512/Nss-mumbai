import React, { Component } from 'react';
import logo from "../../Assets/logo.png";
import classnames from "classnames";
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
  Button
} from 'reactstrap';
import {Link} from "react-router-dom";
import '../../style/style.css'
class MainHeader extends Component {
        state={
        header:"header2",
        prevScrollpos: window.pageYOffset,
      visible: true
        }
        componentDidMount() {
          window.addEventListener("scroll", this.handleScroll);
        }
      
        // Remove the event listener when the component is unmount.
        componentWillUnmount() {
          window.removeEventListener("scroll", this.handleScroll);
        }
        handleScroll = () => {
          const { prevScrollpos } = this.state;
      
          const currentScrollPos = window.pageYOffset;
          const visible = prevScrollpos > currentScrollPos;
      
          this.setState({
            prevScrollpos: currentScrollPos,
            visible
          });
        };


  
  
   

  
    render () {
        return (
            <div className="d-flex flex-column">
                <Navbar  className={this.state.header} 
                className={classnames("navbar",{"navbar--hidden": !this.state.visible},this.state.header)}light expand="md">
                <NavbarToggler onClick={this.toggle} style={{color:"white"}}>
                  <FontAwesomeIcon  icon= {faBars} color="white" size="lg"/>
                  </NavbarToggler>
            <NavbarBrand  href="/"><img src={logo} width="200px" height="100px"/></NavbarBrand>

        
            <Collapse right isOpen={this.state.isopen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/">
                  <NavLink>Home</NavLink> </Link>
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
         
              </div> 
        )

    }
}


export default MainHeader;

