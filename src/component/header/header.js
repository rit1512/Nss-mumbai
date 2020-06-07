import React, { Component } from 'react';
import video from "../../Assets/1.mp4";
import poster from "../../Assets/poster.jpg";
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
     console.log(this.state.header)
     
    }
    render () {
        return (
            <div >
                <Navbar  className={this.state.header} light expand="md">
            <NavbarBrand  href="/"><img src={logo} width="200px" height="100px"/>National Space Society</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isopen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Advisory Board</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Collab & International Reach</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Achievement</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Initiative
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Events
                    </DropdownItem>
                    <DropdownItem>
                      Webinars
                    </DropdownItem>
                    <DropdownItem>
                      WorkShop
                    </DropdownItem>
                    <DropdownItem>
                      Competitions
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Contact Us</NavLink>
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

