import React, { Component } from "react";

class QuestionItem extends React.Component {
  render() {
    let que = this.props.que;
    return (
      <>
        <button type="button" class="list-group-item list-group-item-action" checked>
          {que.id}.{que.question}
        </button>
       
      </>
    );
  }
}

export default QuestionItem;
