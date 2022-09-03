import React from "react";
import ReactDOM from "react-dom";
import { API_KEY } from "../../config/config.js";
const axios = require("axios");

class QuestionReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQues: this.props.quesObj,
    };
    this.handleReport = this.handleReport.bind(this);
  }

  handleReport(e) {
    var temp = parseInt(this.state.currentQues.question_id);
    console.log(temp);
    axios
      .put(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${temp}/report`,
        {},
        { headers: { Authorization: `${API_KEY}` } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    var tempObj = this.state.currentQues;
    tempObj.reported = true;
    this.setState({ currentQues: tempObj });
  }

  render() {
    let reportButton;
    if (this.state.currentQues.reported) {
      reportButton = <span>Reported</span>;
    } else {
      reportButton = (
        <button onClick={(e) => this.handleReport(e)}> Report? </button>
      );
    }
    return <span>{reportButton}</span>;
  }
}

export default QuestionReport;
