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
    this.props.onLoad();
  }

  render() {
    let questionIndex = this.props.quizs.App.questionIndex;
    let arrayQuestion = this.props.quizs.App.question;
    let questionObj = arrayQuestion[questionIndex];
    let answers = questionObj.answers;    
    let questionId = questionObj.id;
    return (
      <>
        <h3>
          {questionObj.id} . {questionObj.question}
        </h3>
        <div>
          <form>
            <ul>
              {answers.map((answer) => (
                <RadioButton answer={answer} questionId={questionId} />
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
