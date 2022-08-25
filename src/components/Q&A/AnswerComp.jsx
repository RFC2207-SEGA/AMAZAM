import React from "react";
import ReactDOM from "react-dom";

const AnswerComp = (props) => {
  var aList = props.answerList;
  var key = Object.keys(aList);
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
    //console.log('Sorted: ', arr);
  }
  return (
    <div id='AComp'>
    {arr.map((ans) =>
    <div id="AWrapper">
      <h1 id='ALetter'>A: </h1><p id="Abody">{ans.body}</p>
    </div>
    )}
    </div>
  )

}

export default AnswerComp;


