import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
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
        <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist">
          <NavItem>
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
                <i className="ni ni-atom" />
              </span>
            </NavLink>
          </NavItem>
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
                <i className="ni ni-chat-round" />
              </span>
            </NavLink>
          </NavItem>
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
                <i className="ni ni-cloud-download-95" />
              </span>
            </NavLink>
          </NavItem>
        </Nav>
      </>
    );
  }
}

export default LevelDisplay;