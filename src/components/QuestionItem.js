import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from './../actions/index';

class QuestionItem extends React.Component {
  constructor(props)
  {
    super(props);
    this.handleChoose = this.handleChoose.bind(this);
  }

  handleChoose()
  {      
      this.props.onHandleChoose(this.props.que.id);
  }

  render() {
    let que = this.props.que;
    let res = 'NOT YET';
    let answerC = que.answer;
    if(answerC != -1)
    {
      res = 'DONE'
    }
    return (
      <>
        <button type="button" className="list-group-item list-group-item-action" onClick={this.handleChoose}>
          {que.id}.{que.question} [{res}]
        </button>       
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizs: state.quizs,
  };
};


const mapDispathToProps = (dispath, props) =>{
  return {
    onHandleChoose: (id)=>{
      dispath(action.showQuestion(id))
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps) (QuestionItem);
