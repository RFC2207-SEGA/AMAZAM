import React from "react";
import ReactDOM from "react-dom";


class AnswerReport extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAns: this.props.ansObj
    }
    this.handleReport = this.handleReport.bind(this);
  }

  handleReport(e) {
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