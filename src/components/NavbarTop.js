import React from "react";
import Avatar from "./Avatar";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import "./main.css";

class NavbarTop extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-transparent" expand="md">
        <div className="container-fluid">
        <NavbarBrand href="https://github.com/KimTrijnh" target="blank">
            <Avatar text="Huong's Porfolio" />
          </NavbarBrand>
          <button aria-expanded="false" className="navbar-toggler navbar-toggler" id="navbarNav" type="button">
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
          
          <UncontrolledCollapse navbar toggler="#navbarNav">
            <Nav navbar>
              <NavItem className="active">
                <NavLink href="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" onClick={this.props.toggleAbout}>
                  My Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" onClick={this.props.toggleContact}>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </div>
          
        </Navbar>
      </>
    );
  }
}

export default NavbarTop;
