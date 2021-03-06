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
import React, { Component }  from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

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
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

import StartButton from "../../components/start-button";
import UserContext from "../../UserContext";

class Landing extends Component {

  static contextType = UserContext
 // state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {

    const user = this.context
    console.log('landing',user)
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
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
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      
                      <h1 className="display-3 text-white">
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        
                        Are you ready to go on a coding adventure
                        <span>with iconic women in tech {user.nickname}? </span>
                        <span>&nbsp;</span>
                      </h1>
                      <div className="btn-wrapper">
                        <StartButton/>
                      </div>
                    </Col>
                    <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("../../assets/img/theme/girl_sparkle.png")}
                  />
                </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              
              <Row className="justify-content-center">
               
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                          <CardImg
                          alt="..."
                          src={require("assets/img/theme/macbook1.png")}
                          top
                        />
                      <CardBody>
                        <div className="d-flex px-3">
                          <div>
                            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                              <i className="ni ni-planet" />
                            </div>
                          </div>
                          <div className="pl-4">
                            <h5 className="title text-default">
                              Travel the world of programming
                            </h5>
                            <p className="description mt-3">
                              Every coding language is a new location on the map to unlock!
                            </p>
                          </div>
                      </div>
                    </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                          <CardImg
                          alt="..."
                          src={require("assets/img/theme/macbook2.png")}
                          top
                        />
                          <CardBody>
                            <div className="d-flex px-3">
                              <div>
                                <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                  <i className="ni ni-planet" />
                                </div>
                              </div>
                              <div className="pl-4">
                                <h5 className="title text-default">
                                  Collect cool achievements
                                </h5>
                                <p className="description mt-3">
                                  Get rewarded when you pass levels, and milestones in the story.

                                </p>
                              </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                      <CardImg
                          alt="..."
                          src={require("assets/img/theme/macbook3.png")}
                          top
                        />
                          <CardBody>
                            <div className="d-flex px-3">
                              <div>
                                <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                  <i className="ni ni-planet" />
                                </div>
                              </div>
                              <div className="pl-4">
                                <h5 className="title text-default">
                                  Learn to code with stories
                                </h5>
                                <p className="description mt-3">
                                  Play the game as a woman in tech and learn about their life.
                                </p>
                              </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/girlgroup.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Girl power !
                      </h4>
                      <p className="lead text-italic text-white">
                        
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our Story</h3>
                    <p className="lead">
                       Women are important people in tech and you have the ability to learn the skills for a tech career!
                    </p>
                    <p>
                      From the U.S. workforce, only 20% of the people in a technology career are females.
                      Computer science jobs are high-paying and have many opportunities. 
                    </p>
                    <p>
                      So, we want to empower you, to learn to code, and feel love and support from the tech community. 
                      
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>  
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
