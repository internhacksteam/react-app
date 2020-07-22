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
  CardFooter,
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
import FormInput from "../IndexSections/FormInput.js";

import CardsFooter from "components/Footers/CardsFooter.js";
import LessonModal from "../IndexSections/LessonModal.js";
import LevelDisplay from "../IndexSections/LevelDisplay.js";


class QuestionStart extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-shaped section-lg">
              <div className="shape shape-style-1 bg-gradient-warning">
                
              </div>
              <Container>
              <div className="col px-0">
              <Row>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("../../assets/img/theme/girl_sparkle.png")}
                  />
                </Col>
                <Col lg="8" md="7">
                  <Card>
                    <CardBody>
                      <span>
                         <p>Assign the variable <code>City</code> to <b>New York</b></p> 
                         
                      </span>
                      <code>
                        <FormInput />
                      </code>
                    </CardBody>
                    <CardFooter>
                      <Row className="justify-content-lg-between">
                          
                          <LessonModal />
                          <Button className ="mb-3" color="success" type="button">
                            Submit
                          </Button>
                      </Row>
                    </CardFooter>
                  </Card>
                </Col>
                </Row>
               </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom">
                
              </div>
            </section>

          </div>
        </main>
      
      </>
    );
  }
}

export default QuestionStart;
