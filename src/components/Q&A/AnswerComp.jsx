import React from "react";
import ReactDOM from "react-dom";
import AnswerReport from "./AnswerReport.jsx";
import { API_KEY } from "../../config/config.js";
const axios = require("axios");

class AnswerComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerArr: [],
      totalAnsArr: [],
      nameSeller: false,
      reported: false,
      currentAns: {},
      moreBtnClick: false,
      answersFromGet: {}
    };
    this.formatDate = this.formatDate.bind(this);
    this.checkName = this.checkName.bind(this);
    this.handleClick = this.handleAnsHelp.bind(this);
    this.sortByHelp = this.sortByHelp.bind(this);
    this.handleSeeMoreAns = this.handleSeeMoreAns.bind(this);
    this.handleSeeLessAns = this.handleSeeLessAns.bind(this);
  }

  formatDate(dateStr) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString([], options);
  }

  checkName(nameStr) {
    if (nameStr === "Seller") {
      this.state.nameSeller = true;
    }
    return nameStr;
  }
  sortByHelp() {
    var aList = this.state.answersFromGet.results;
    var key = Object.keys(this.state.answersFromGet.results);
    var arr = [];
    //populate an array of answer objects at specific key
    for (var i = 0; i < key.length; i++) {
      arr.push(aList[key[i]]);
    }
    //console.log(arr);
    //if array length is greater than one meaning there is more than one asnwer
    if (arr.length > 1) {
      //compare the helpfullness of each answer and sort it greatest first to lowest last
      // for (var i = 0; i < arr.length; i++) {
      //   if (arr[i + 1]) {
      //     if (arr[i].helpfulness < arr[i + 1].helpfulness) {
      //       var temp = arr[i];
      //       arr[i] = arr[i + 1];
      //       arr[i + 1] = temp;
      //     }
      //   }
      // }
      arr.sort((a, b) => {
        return b.helpfulness - a.helpfullness;
      });
      if (this.state.moreBtnClick) {
        this.setState({ totalAnsArr: arr });
        this.setState({ answerArr: arr });
      } else {
        this.setState({ totalAnsArr: arr });
        arr = arr.slice(0, 2);
        this.setState({ answerArr: arr });
      }
    }

    this.setState({ answerArr: arr });
  }

  handleAnsHelp(ans, e) {
    var temp = parseInt(ans.id);
    axios
      .put(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${temp}/helpful`,
        {},
        { headers: { Authorization: `${API_KEY}` } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    var currentArr = this.state.answerArr;
    var index = currentArr.indexOf(ans);
    var tempObj = ans;
    tempObj.helpfulness += 1;
    currentArr.splice(index, 1, tempObj);
    this.setState({ answerArr: currentArr });
    this.sortByHelp();
  }

  handleSeeMoreAns(ansArr) {
    this.setState({ moreBtnClick: true });
    this.setState({ answerArr: ansArr });
  }
  handleSeeLessAns(ansArr) {
    this.setState({ moreBtnClick: false });
    var tempArr = ansArr.slice(0, 2);
    this.setState({ answerArr: tempArr });
  }


  componentDidMount() {
    if (this.props.quesID !== undefined) {
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${this.props.quesID}/answers`,
        {
          headers: { Authorization: `${API_KEY}` },
          params: { count: 5, page: 1, question_id: this.props.quesID },
        }
      )
      .then((res) => this.setState({answersFromGet: res.data}))
      .catch((err) => console.log(err));
      }
    setTimeout(this.sortByHelp, 1000);
  }

  render() {
    let moreBtn;
    if (this.state.totalAnsArr.length > 2) {
      moreBtn = (
        <button onClick={(e) => this.handleSeeMoreAns(this.state.totalAnsArr)}>
          See more answers
        </button>
      );
    } else {
      moreBtn = <span></span>;
    }
    if (this.state.moreBtnClick) {
      moreBtn = (
        <button onClick={(e) => this.handleSeeLessAns(this.state.totalAnsArr)}>
          Collapse answers
        </button>
      );
    }

    return (
      <div id="a-comp">
        {this.state.answerArr.map((ans) => (
          <div id="a-wrapper">
            <div style={{ display: "none" }}>
              {this.checkName(ans.answerer_name)}
            </div>
            <h1 id="a-letter">A: </h1>
            <p id="a-body">{ans.body}</p>
            <span>By:</span>
            <span style={this.state.nameSeller ? { fontWeight: "bold" } : {}}>
              {" "}
              {ans.answerer_name},
            </span>
            <span> {this.formatDate(ans.date)}</span>
            <span>
              {" "}
              | Helpful?{" "}
              <button onClick={(e) => this.handleAnsHelp(ans, e)}>
                Yes?{" "}
              </button>{" "}
              ({ans.helpfulness})
            </span>
            <span>
              {" "}
              | <AnswerReport ansObj={ans} />
            </span>
          </div>
        ))}
        <div>{moreBtn}</div>
      </div>
    );
  }
}

export default AnswerComp;
