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
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Achievements extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
          <Col md="12">
            <Button
              block
              className="mb-3"
              color="warning"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              Achievements 
            </Button>
            <Modal
              className="modal-dialog-centered modal-danger"
              contentClassName="bg-gradient-danger"
              isOpen={this.state.notificationModal}
              toggle={() => this.toggleModal("notificationModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Check out your cool achievements!
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("notificationModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                
                <div className="py-3 text-center">
                  <i className="fa fa-trophy fa-3x" />
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-flask" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Level 1 Completed
                </UncontrolledTooltip>
                &nbsp;
                &nbsp;
                &nbsp;
                <Button
                  className="btn-icon-only rounded-circle"
                  color="github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-lock" />
                  </span>
                </Button>
                &nbsp;
                &nbsp;
                &nbsp;
                <Button
                  className="btn-icon-only rounded-circle"
                  color="github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-lock" />
                  </span>
                </Button>
                &nbsp;
                &nbsp;
                &nbsp;
                <Button
                  className="btn-icon-only rounded-circle"
                  color="github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-lock" />
                  </span>
                </Button>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <Button
                  className="btn-icon-only rounded-circle"
                  color="github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-lock" />
                  </span>
                </Button>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <Button
                  className="btn-icon-only rounded-circle"
                  color="github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-lock" />
                  </span>
                </Button>
                &nbsp;
                &nbsp;
                &nbsp;
                
              </div>
              <div className="modal-footer">
                
                <Button
                  className="text-white ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("notificationModal")}
                >
                  Close
                </Button>
                
              </div>
            </Modal>
          </Col>
      </>
    );
  }
}

export default Achievements;
