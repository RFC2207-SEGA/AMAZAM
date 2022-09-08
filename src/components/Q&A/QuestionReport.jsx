import React from "react";
import ReactDOM from "react-dom";
import { API_KEY } from "../../config/config.js";
import {handleInteractions} from '../../utils.js';
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
        handleInteractions(e, 'Q&A');
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
      reportButton = <span data-testid="Report">Reported</span>;
    } else {
      reportButton = (
        <button id='q-report' data-testid="Report" onClick={(e) => this.handleReport(e)}> Report? </button>
      );
    }
    return <span data-testid="Report">{reportButton}</span>;
  }
}

export default QuestionReport;
