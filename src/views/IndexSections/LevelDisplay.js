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

class LevelDisplay extends React.Component {
  state = {
    circledNavPills: 3
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist" 
            to="/questionstart-page" tag={Link}>
          <Col lg= "2">
            <NavItem >
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
                    Syntax 1                     
                </span>
          
              </NavLink>
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
                    Syntax 2                     
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
                    Syntax 3                     
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
                    Syntax 4                     
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
                    Syntax 5                    
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
                    Syntax 6                  
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