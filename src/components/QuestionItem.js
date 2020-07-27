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
    return (
      <>
        <button type="button" class="list-group-item list-group-item-action" onClick={this.handleChoose}>
          {que.id}.{que.question}
        </button>       
      </>
    );
  }
}

const mapDispathToProps = (dispath, props) =>{
  return {
    onHandleChoose: (id)=>{
      dispath(action.showQuestion(id))
    }
  }
}

export default connect(null,mapDispathToProps) (QuestionItem);
