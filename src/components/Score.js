import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Socre extends React.Component {
  render() {
    let sco = this.props.quizs.User.score; 
    return (
      <>
        <Form>
          <Form.Group controlId="formBasicRange">
            <Form.Label>
              {" "}
              <h1>Your Score: {sco}</h1>
            </Form.Label>        
          </Form.Group>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizs: state.quizs,
  };
};

export default connect(mapStateToProps, null)(Socre);
