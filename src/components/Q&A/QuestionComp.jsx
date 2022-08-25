import React from "react";
import ReactDOM from "react-dom";

const QuestionComp = (props) => {

  var questions = props.questionList;
  //console.log(questions);
  return (
    <div id='QComp'>
      <li id='QBody'>Q: {questions.question_body}</li>
      <li id='QUser'>Asked by: {questions.asker_name} Helpfulness: {questions.question_helpfulness}</li>
    </div>

  )

}

export default QuestionComp;