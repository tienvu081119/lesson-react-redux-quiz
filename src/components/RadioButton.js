import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../actions/index";

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);  
    this.state  = {
      isChecked: false
    }
  }

  handleChange(event) {         
    let ans =  event.target.value;
    let questionId = this.props.questionId;   
    this.props.onHandleChange(questionId,ans)
  }

  render() {    
    let ans = this.props.answer;   
    let isChecked = this.props.quizs.App.isChecked;
    console.log(isChecked);
    return (
      <>
        <li>
          <label>
            <input
              name="ans"
              type="radio"
              value={ans}              
              onChange={this.handleChange}    
              checked = {isChecked === ans}          
            />
            {ans}
          </label>
        </li>      
      </>
    );
  }
}

const mapStateToProps = (state) =>{   
  return {
      quizs : state.quizs
  }
}


const mapDispathToProps = (dispath, props) =>{
    return {
      onHandleChange: (questionIndex,ans)=>{
        dispath(action.chooseAns(questionIndex,ans))
      }
    }
}
export default connect(mapStateToProps, mapDispathToProps) (RadioButton);
