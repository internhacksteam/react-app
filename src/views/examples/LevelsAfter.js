/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col, 
  Progress,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Achievements from "../IndexSections/Achievements.js";
import LevelDisplayAfter from "../IndexSections/LevelDisplayAfter.js";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../components/Loading";
import UserContext from "../../UserContext";
import AchievementsEmpty from "views/IndexSections/AchievementsEmpty.js";

class Levels extends React.Component {

  static context = UserContext

  componentDidMount() {
    const user = this.context
    console.log(user)
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <div>
          <DemoNavbar />
        </div>
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-shaped section-lg">
              <div className="shape shape-style-1 bg-gradient-primary">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container>
                <Row>
                    <Col lg="6" md="8">
                      <div className="progress-wrapper">
                          <div className="progress-info">
                            <div className="progress-label">
                              <span><p>Current Level Completed</p></span>
                            </div>
                            <div className="progress-percentage">
                              <span>16%</span>
                            </div>
                          </div>
                          <Progress max="100" value="16" color="success" />
                        </div>
                    </Col>
                    <Col lg="6" md="12">
                      <div class ="float-right">
                        <Achievements />
                      </div>
                    </Col>
                </Row>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 2560"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>

          </div>
           {/* 1st Hero Variation */}
          
            
              <Container>
                
              <span>&nbsp;</span>
            
                    <h1 className="display-3 text-black">
                      <span>&nbsp;</span>
                      Start your Python journey.
                      <span>&nbsp;</span>
                    </h1>
                    
                      < LevelDisplayAfter />

                    <span>&nbsp;</span>
                </Container>

        </main>
      
      </>
    );
  }
}

export default withAuthenticationRequired(Levels, {
  onRedirecting: () => <Loading />,
});
