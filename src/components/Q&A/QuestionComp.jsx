import React from "react";
import ReactDOM from "react-dom";
import AddAnswer from "./AddAnswer.jsx";
import { API_KEY } from "../../config/config.js";
const axios = require("axios");

class QuestionComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questionList,
      helpClick: false,
      showAns: false,
    };
    this.handleQHelp = this.handleQHelp.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleQHelp(qObj) {
    var questionID = parseInt(qObj.question_id);
    axios
      .put(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${questionID}/helpful`,
        {},
        { headers: { Authorization: `${API_KEY}` } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    qObj.question_helpfulness += 1;
    this.setState({ questions: qObj });
    this.setState({ helpClick: true });
  }

  handleClose(e) {
    e.preventDefault();
    this.setState({ showAns: false });
  }

  //Helpful? {this.state.questions.question_helpfulness}
  render() {
    let helpBtn;
    if (this.state.helpClick) {
      helpBtn = <span> Yes! </span>;
    } else {
      helpBtn = (
        <button onClick={(e) => this.handleQHelp(this.state.questions)}>
          {" "}
          Yes?{" "}
        </button>
      );
    }
    return (
      <div id="q-comp">
        <div id="q-body">
          Q: {this.state.questions.question_body}
          <span id="q-user">
            Asked by: {this.state.questions.asker_name} | {helpBtn}{" "}
            <span data-testid="numHelp">
              ({this.state.questions.question_helpfulness})
            </span>{" "}
            |
            <button onClick={(e) => this.setState({ showAns: true })}>
              {" "}
              Add an Answer
            </button>
            <AddAnswer
              onClose={(e) => this.handleClose(e)}
              showAns={this.state.showAns}
              proID={this.props.proID}
              qbody={this.state.questions.question_body}
              qID={this.state.questions.question_id}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default QuestionComp;
