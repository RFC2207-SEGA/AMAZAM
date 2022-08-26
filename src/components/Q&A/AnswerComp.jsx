import React from "react";
import ReactDOM from "react-dom";

class AnswerComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerList: this.props.answerList,
      nameSeller: false
    }
    this.formatDate = this.formatDate.bind(this);
    this.checkName = this.checkName.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  formatDate(dateStr){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString([],options);
  }

  checkName(nameStr) {
    if (nameStr === 'Seller') {
      this.state.nameSeller = true;
    }
    return nameStr;
  }

  handleClick(e) {
    console.log(e);
  }




  render() {
    var aList = this.state.answerList;
    var key = Object.keys(this.state.answerList);
    var arr = [];

    //populate an array of answer objects at specific key
  for (var i = 0; i < key.length; i++) {
    arr.push(aList[key[i]]);
  }
  //console.log(arr);
  //if array length is greater than one meaning there is more than one asnwer
  if (arr.length > 1) {
  //compare the helpfullness of each answer and sort it greatest first to lowest last
    for (var i = 0; i < arr.length; i++) {
      if (arr[i+1]) {
        if(arr[i].helpfulness < arr[i+1].helpfulness) {
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
        }
      }
    }
  }

    return(
      <div id='AComp'>
      {arr.map((ans) =>
      <div id="AWrapper">
        <div style={{display:'none'}}>{this.checkName(ans.answerer_name)}</div>
        <h1 id='ALetter'>A: </h1><p id="Abody">{ans.body}</p>
          <span>By:</span><span style={this.state.nameSeller ? {fontWeight: 'bold'} : {}}> {ans.answerer_name},</span>
          <span> {this.formatDate(ans.date)}</span>
          <span> | Helpful? <button onClick={this.handleClick}>Yes? </button> ({ans.helpfulness})</span>
      </div>
      )}
      </div>
    )
  }




}

export default AnswerComp;


