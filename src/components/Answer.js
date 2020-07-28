import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../actions/index";
import RadioButton from "./RadioButton";

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
import Question from "./Question";

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("DidMound");
    this.props.onLoad();
  }

  render() {
    let questionIndex = this.props.quizs.App.questionIndex;
    let arrayQuestion = this.props.quizs.App.question;
    let questionObj = arrayQuestion[questionIndex];
    let answers = questionObj.answers;
    return (
      <>
        <h3>
          {questionObj.id} . {questionObj.question}
        </h3>
        <div>
          <form>
            <ul>
              {answers.map((answer) => (
                <RadioButton answer={answer} questionId={questionObj.id} />
              ))}
            </ul>
          </form>
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

const mapDispathToProps = (dispath, props) => {
  return {
    onLoad: () => {
      dispath(action.load());
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Answer);
