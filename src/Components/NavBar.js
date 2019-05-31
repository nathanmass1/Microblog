import React, { Component } from 'react';
// import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className='bg-dark'>
          <NavLink exact to="/" className="navbar-brand">
            Nate and Chris' Microblog
          </NavLink>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/new">New Post</NavLink>
            </NavItem>
          </Nav>

        </Navbar>
      </div>
    );
  }
}

export default NavBar;