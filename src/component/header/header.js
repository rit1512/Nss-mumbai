import React, { Component } from 'react';
import video1 from "../../Assets/1.mp4";
import video2 from "../../Assets/mobile.mp4";
import video3 from "../../Assets/mobile1.mp4";
import poster from "../../Assets/poster.jpg";
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
        header:"header2",
        isopen:false,
        prevScrollpos: window.pageYOffset,
        visible: true
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
     Scroll=()=>{
        if (window.scrollY > 70) {
            return this.setState({header:"header2"});
          } else  {
            return this.setState({header:"header2"});
          }
    }
  
    toggle=()=>{
      this.setState({isopen : !this.state.isopen})
    }

    componentDidMount(){
     window.addEventListener('scroll', this.Scroll);
     window.addEventListener("scroll", this.handleScroll);
     
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
    render () {
        return (
            <div className="d-flex flex-column">
                <Navbar className= {classnames("navbar",{"navbar--hidden": !this.state.visible},this.state.header)}light expand="md">
                <NavbarToggler onClick={this.toggle} style={{color:"white"}}>
                  <FontAwesomeIcon  icon= {faBars} color="white" size="lg"/>
                  </NavbarToggler>
            <NavbarBrand  href="/"><img src={logo} width="200px" height="100px"/></NavbarBrand>

        
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
            <div  className="d-none d-lg-block" >        
      <video  autoPlay loop muted style={{width: "100%"}} poster={poster}>
        <source src={video1}  type="video/mp4" />
      </video>
    </div>
         
          <div  className="d-lg-none" >        
          <video  autoPlay loop muted style={{width: "100%"}} poster={poster}>
            <source src={video3}  type="video/mp4" />
          </video>
        </div>
              </div> 
        )

    }
}


export default Header;

