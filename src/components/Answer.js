import React, { Component } from "react";
import { connect } from 'react-redux';
import * as action from './../actions/index';

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Radio,
  RadioGroup,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount()
  {
      console.log('DidMound');
      this.props.onLoad();
  }

  render() {
    console.log('Render');
    return (
      <>
        <h3>Test Question</h3>
        <div>
          <Table responsive="xl">
            <thead>
              <tr>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="radio" />1
                </td>
              </tr>
              <tr>
                <td>
                  <input type="radio" />2
                </td>
              </tr>
              <tr>
                <td>
                  <input type="radio" />3
                </td>
              </tr>
              <tr>
                <td>
                  <input type="radio" />4
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}


const mapDispathToProps = (dispath, props) =>{
    return {
        onLoad: () =>{
            dispath(action.load())
        }
    }
}

export default connect(null,mapDispathToProps) (Answer);

