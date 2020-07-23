import React, {Component} from "react";

import ReactDOM from 'react-dom';


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class FormInput extends React.Component {
  render() {
    return (
      <> 
        <Form>
          <Input
              className="form-control-alternative"
              placeholder="Write your code here ..."
              rows="3"
              type="textarea"
          />
        </Form>
      </>
    );
  }
}

export default FormInput;
