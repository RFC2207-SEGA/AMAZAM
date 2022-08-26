import React from "react";
import ReactDOM from "react-dom";


class QuestionComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questionList
    }
  }



  render() {
    return (
      <div id='QComp'>
        <li id='QBody'>Q: {this.state.questions.question_body}</li>
        <li id='QUser'>Asked by: {this.state.questions.asker_name} Helpfulness: {this.state.questions.question_helpfulness}</li>
      </div>
    )
  }
}





export default QuestionComp;