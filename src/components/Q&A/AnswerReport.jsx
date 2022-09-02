import React from "react";
import ReactDOM from "react-dom";
import {API_KEY} from '../../config/config.js';
const axios = require('axios');

class AnswerReport extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAns: this.props.ansObj
    }
    this.handleReport = this.handleReport.bind(this);
  }

  handleReport(e) {
    var temp = parseInt(this.state.currentAns.id);
    console.log(temp);
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${temp}/report`,
    {},
    {headers: {'Authorization': `${API_KEY}`}})
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});
    var tempObj = this.state.currentAns;
    tempObj.reported = true;
    this.setState({currentAns: tempObj});
  }


  render(){
    let reportButton;
    if(this.state.currentAns.reported) {
      reportButton = <span>Reported</span>;
    } else {
      reportButton = <button onClick={(e) => this.handleReport(e)}> Report? </button>;
    }
    return(
      <span>{reportButton}</span>
    );
  }

}

export default AnswerReport;