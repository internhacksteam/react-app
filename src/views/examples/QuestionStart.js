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
import axios from 'axios';


// nodejs library that concatenates classes
import classnames from "classnames";

import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  FormGroup,
  Input,
  Container,
  Row,
  Col, 
  Form,
  UncontrolledAlert
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

import CardsFooter from "components/Footers/CardsFooter.js";
import LessonModal from "../IndexSections/LessonModal.js";


class QuestionStart extends React.Component {
        state = {
          userAnswer: '',
          output: '',
          showButton: false,
          correct: null
    };
    
    handleShow = () => {
      this.setState({ showButton: true });
  }

    handleHide = () =>{
        this.setState({
            showButton: false });
    }

    handleChange = event => {
      this.setState({ userAnswer: event.target.value });
    }

    handleSubmit = (event) => {
      event.preventDefault();
    

    const Answer = JSON.stringify ({
      Answer: this.state.userAnswer
    });

      axios.post('http://127.0.0.1:5000/api/evaluatingAnswer', {Answer})
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const output = res.data;
        this.setState({ output });
      })
  
      let checkAnswer = this.state.output;
      if (checkAnswer !== "Sorry, try again") {
        alert("Wrong answer, try again!");
        this.setState({ correct: true });
      } else {
        alert("Correct!")
        this.setState({ showButton: true });
        this.setState({ correct: true });
      }
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
              <div>
                 {this.state.correct ? 
                  <UncontrolledAlert color="danger" fade={false}>
                  <span className="alert-inner--icon">
                    <i className="ni ni-support-16" />
                  </span>
                  <span className="alert-inner--text ml-1">
                    <strong>Wrong answer. Try again.</strong> 
                  </span>
                  </UncontrolledAlert> : null }
                  </div>
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
                          <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                              <Input
                                  type="text"
                                  id="input"
                                  name="userAnswer"
                                  placeholder="Write your code here ..." 
                                  onChange ={this.handleChange}
                              />
                            </FormGroup>

                            <Input type = "submit">
                            </Input>
                          </Form>
                    </code>
                    </CardBody>
                    <CardFooter>
                      <Row className="justify-content-lg-between">
                        <LessonModal />
                          
                          <div>
                          {this.state.showButton ? 
                            <Button>Next Question</Button> : null }
                          </div>
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
