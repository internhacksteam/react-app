import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


const LogoutButton = () => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Nav className="mr-auto" navbar>
    {isAuthenticated && (
      <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret id="profileDropDown">
      <img
      src={user.picture}
      alt="Profile"
      className="nav-user-profile rounded-circle"
      width="50"
      />
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem header>{user.name}</DropdownItem>
      <DropdownItem
      tag={RouterNavLink}
      to="/profile"
      className="dropdown-profile"
      activeClassName="router-link-exact-active"
      >
      Profile
      </DropdownItem>
      <DropdownItem
      id="qsLogoutBtn"
      onClick={() => logoutWithRedirect()}
      >
       Log
      out
      </DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>
      )}
    </Nav>


    );
};

export default LogoutButton;