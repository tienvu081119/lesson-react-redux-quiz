import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../actions/index";

class RadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        color: 'green'
      };
  }

  render() {
    let ans = this.props.answer;   
    return (
      <>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={this.state.color === "green"} />
                  {ans}
          </label>
        </div>
      </>
    );
  }
}

export default RadioButton;
