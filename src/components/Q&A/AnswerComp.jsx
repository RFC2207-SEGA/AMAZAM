import React from "react";
import ReactDOM from "react-dom";

const AnswerComp = (props) => {
  var aList = props.answerList;
  var key = Object.keys(aList);
  var arr = [];
  var nameSeller = false;

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
    //console.log('Sorted: ', arr);
  }

  function handleClick(helpNum , e) {
    helpNum++;
  }

  function formatDate(dateStr){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString([],options);
  }

  function checkName(nameStr) {
    if (nameStr === 'Seller') {
      nameSeller = true;
    }
    return nameStr;
  }

  function update() {
    forceUpdate();
  }
  return (
    <div id='AComp'>
    {arr.map((ans) =>
    <div id="AWrapper">
      <div style={{display:'none'}}>{checkName(ans.answerer_name)}</div>
      <h1 id='ALetter'>A: </h1><p id="Abody">{ans.body}</p>
        <span>By:</span><span style={nameSeller ? {fontWeight: 'bold'} : {}}> {checkName(ans.answerer_name)},</span>
        <span> {formatDate(ans.date)}</span>
        <span> | Helpful? <button onClick={(e) => {ans.helpfulness++; update()}}>Yes? </button> ({ans.helpfulness})</span>
    </div>
    )}
    </div>
  )

}

export default AnswerComp;


