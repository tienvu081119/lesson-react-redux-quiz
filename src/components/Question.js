import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionItem from "./QuestionItem";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

class Question extends React.Component {
  render() {
    let ques = this.props.quizs.App.question;
    return (
      <>
        <div>
          <button
            type="button"
            className="list-group-item list-group-item-action active"
          >
            Description
          </button>
          {ques.map((que) => (
            <QuestionItem que={que} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizs: state.quizs,
  };
};

export default connect(mapStateToProps, null)(Question);
