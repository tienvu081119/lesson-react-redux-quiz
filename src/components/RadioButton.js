import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../actions/index";

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);  
  }

  handleChange(event) {      
    let questionId = this.props.questionId;  
    let ans =  event.target.value;
    this.props.onHandleChange(questionId,ans)
  }

  render() {    
    let ans = this.props.answer;   
    return (
      <>
        <li>
          <label>
            <input
              name="ans"
              type="radio"
              value={ans}              
              onChange={this.handleChange}
            />
            {ans}
          </label>
        </li>      
      </>
    );
  }
}
const mapDispathToProps = (dispath, props) =>{
    return {
      onHandleChange: (questionIndex,ans)=>{
        dispath(action.chooseAns(questionIndex,ans))
      }
    }
}
export default connect(null, mapDispathToProps) (RadioButton);
