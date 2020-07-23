import React from "react";
import classnames from "classnames";

import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Col,
} from "reactstrap";

import axios from 'axios';

class LevelDisplay extends React.Component {
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
    
      return ;
    };
  }
  state = {
        circledNavPills: 2,
        levels:[]
      };
  componentDidMount() {
    axios.get(`http://127.0.0.1:5000/api/displayLevels`)
    .then(res => {
      var levels = res.data;
      this.setState({ levels });
      console.log("levels",levels);
    })
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
      <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist">
      <Col lg= "2">
      <NavItem>
      <Link to="/questionstart-page" tag={Link}>
        <NavLink 
        aria-selected={this.state.circledNavPills === 1}
        className={classnames("rounded-circle", {
          active: this.state.circledNavPills === 1
        })}
        onClick={e => this.toggleNavs(e, "circledNavPills", 1)}
        href="#pablo"
        role="tab"
        >

          <span className="nav-link-icon d-block">
            print()
          </span>
      
      </NavLink>
      </Link>
      </NavItem>

      </Col>
      <Col lg= "2">
      <NavItem>
      <NavLink
      aria-selected={this.state.circledNavPills === 2}
      className={classnames("rounded-circle", {
        active: this.state.circledNavPills === 2
      })}
      onClick={e => this.toggleNavs(e, "circledNavPills", 2)}
      href="#pablo"
      role="tab"
      >
      <span className="nav-link-icon d-block">
      variables                   
      </span>

      </NavLink>
      </NavItem>
      </Col>
      <Col lg= "2">
      <NavItem>
      <NavLink
      aria-selected={this.state.circledNavPills === 3}
      className={classnames("rounded-circle", {
        active: this.state.circledNavPills === 3
      })}
      onClick={e => this.toggleNavs(e, "circledNavPills", 3)}
      href="#pablo"
      role="tab"
      >
      <span className="nav-link-icon d-block">
      variables 2                    
      </span>

      </NavLink>
      </NavItem>
      </Col>
      <Col lg= "2">
      <NavItem>
      <NavLink
      aria-selected={this.state.circledNavPills === 4}
      className={classnames("rounded-circle", {
        active: this.state.circledNavPills === 4
      })}
      onClick={e => this.toggleNavs(e, "circledNavPills", 4)}
      href="#pablo"
      role="tab"
      >
      <span className="nav-link-icon d-block">
      conditionals                     
      </span>

      </NavLink>
      </NavItem>
      </Col>
      <Col lg= "2">
      <NavItem>
      <NavLink
      aria-selected={this.state.circledNavPills === 5}
      className={classnames("rounded-circle", {
        active: this.state.circledNavPills === 5
      })}
      onClick={e => this.toggleNavs(e, "circledNavPills", 5)}
      href="#pablo"
      role="tab"
      >
      <span className="nav-link-icon d-block">
      conditionals 2                   
      </span>

      </NavLink>
      </NavItem>
      </Col>
      <Col lg= "2">
      <NavItem>
      <NavLink
      aria-selected={this.state.circledNavPills === 6}
      className={classnames("rounded-circle", {
        active: this.state.circledNavPills === 6
      })}
      onClick={e => this.toggleNavs(e, "circledNavPills", 6)}
      href="#pablo"
      role="tab"
      >
      <span className="nav-link-icon d-block">
      loops                 
      </span>

      </NavLink>
      </NavItem>
      </Col>

      </Nav>
      </>
      );
  }
}

export default LevelDisplay;