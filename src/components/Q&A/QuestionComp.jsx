import React from "react";
import ReactDOM from "react-dom";
import AddAnswer from './AddAnswer.jsx';

class QuestionComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questionList,
      helpClick: false,
      showAns: false
    }
    this.handleQHelp = this.handleQHelp.bind(this);
  }


  handleQHelp(qObj) {
    qObj.question_helpfulness += 1;
    this.setState({questions: qObj});
    this.setState({helpClick: true});
  }


//Helpful? {this.state.questions.question_helpfulness}
  render() {
    let helpBtn
    if(this.state.helpClick) {
      helpBtn = <span> Yes? </span>
    } else {
      helpBtn = <button onClick={(e) => this.handleQHelp(this.state.questions)}> Yes? </button>
    }
    return (
      <div id='QComp'>
        <div id='QBody'>Q: {this.state.questions.question_body}
        <span id='QUser'>
        Asked by: {this.state.questions.asker_name} | {helpBtn} <span data-testid='numHelp'>({this.state.questions.question_helpfulness})</span> |
        <button onClick={(e) => this.setState({showAns: true})}> Add a Answer</button>
        <AddAnswer onClose={() => this.setState({showAns: false})} showAns={this.state.showAns}/>
        </span>
        </div>
      </div>
    )
  }
}





export default QuestionComp;