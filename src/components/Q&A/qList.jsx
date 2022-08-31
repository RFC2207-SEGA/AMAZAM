import React from "react";
import AnswerComp from "./AnswerComp.jsx"
import QuestionComp from "./QuestionComp.jsx"
import AddQuestion from "./AddQuestion.jsx"
import {API_KEY} from '../../config/config.js';
const axios = require('axios');

class QList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productQ: {
        "product_id": "5",
        "results": [{
              "question_id": 37,
              "question_body": "Why is this product cheaper here than other sites?",
              "question_date": "2018-10-18T00:00:00.000Z",
              "asker_name": "williamsmith",
              "question_helpfulness": 4,
              "reported": false,
              "answers": {
                "68": {
                  "id": 68,
                  "body": "We are selling it here without any markup from the middleman!",
                  "date": "2018-08-18T00:00:00.000Z",
                  "answerer_name": "Seller",
                  "helpfulness": 4,
                  "photos": []
                }
              }
            },
            {
              "question_id": 38,
              "question_body": "How long does it last?",
              "question_date": "2019-06-28T00:00:00.000Z",
              "asker_name": "funnygirl",
              "question_helpfulness": 10,
              "reported": false,
              "answers": {
                "70": {
                  "id": 70,
                  "body": "Some of the seams started splitting the first time I wore it!",
                  "date": "2019-11-28T00:00:00.000Z",
                  "answerer_name": "sillyguy",
                  "helpfulness": 6,
                  "photos": [],
                },
                "78": {
                  "id": 78,
                  "body": "9 lives",
                  "date": "2019-11-12T00:00:00.000Z",
                  "answerer_name": "iluvdogz",
                  "helpfulness": 31,
                  "photos": [],
                },
                "79": {
                  "id": 79,
                  "body": "Example",
                  "date": "2019-11-14T00:00:00.000Z",
                  "answerer_name": "ExampleUser",
                  "helpfulness": 2,
                  "photos": [],
                }
              }
            },
            {
              "question_id": 39,
              "question_body": "Does it come in grey?",
              "question_date": "2019-06-28T00:00:00.000Z",
              "asker_name": "funnyboy",
              "question_helpfulness": 2,
              "reported": false,
              "answers": {
                "72": {
                  "id": 72,
                  "body": "Not sure but I hope it does!",
                  "date": "2019-11-28T00:00:00.000Z",
                  "answerer_name": "randomGuy",
                  "helpfulness": 1,
                  "photos": [],
                },
                "80": {
                  "id": 80,
                  "body": "Yes it does! but it is listed somewhere else",
                  "date": "2019-11-12T00:00:00.000Z",
                  "answerer_name": "iluvcatz",
                  "helpfulness": 32,
                  "photos": [],
                },
              }
            },
        ]
      },
      page: 1,
      count: 5,
      questionArr: [],
      searchSort: false,
      searchArray: [],
      totalQuesArr: [],
      btnClick: false,
      addClick: false,
      show: false
    }

    this.sortQuestions = this.sortQuestions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSeeLessQues = this.handleSeeLessQues.bind(this);
    this.handleSeeMoreQues = this.handleSeeMoreQues.bind(this);
    this.handleAddQues = this.handleAddQues.bind(this);
  }

  sortQuestions() {
      var qArr = this.state.productQ.results;
      if (qArr.length > 1) {
        // for (var i = 0; i < qArr.length; i++) {
        //   if(qArr[i-1]) {
        //     if(qArr[i].question_helpfulness > qArr[0].question_helpfulness) {
        //       var temp = qArr[i];
        //       qArr[i] = qArr[i-1];
        //       qArr[i-1] = temp;
        //     }
        //   }
        // }
        qArr.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness;
        });
        this.setState({totalQuesArr: qArr});
        var temp = qArr.slice(0,2);
        this.setState({questionArr: temp});
      }
      this.setState({totalQuesArr: qArr});
      var tempArr = qArr.slice(0,2);
      this.setState({questionArr: tempArr});
  }

  handleSearch(e) {
    var term = e.target.value;
    term = term.toLowerCase();
    var searchArr = this.state.totalQuesArr;
    if (term.length >= 3) {
      this.setState({searchSort: true});
      for(var i = 0; i < searchArr.length; i++) {
        if (searchArr[i - 1]) {
          var currentStr = searchArr[i].question_body;
          if (currentStr.includes(term)) {
            var temp = searchArr[i];
            searchArr[i] = searchArr[0];
            searchArr[0] = temp;
          }
        }
      }
      this.setState({totalQuesArr: searchArr});
      var temp = searchArr.slice(0,2); //make changes here when using live data
      this.setState({searchArray: temp});
    } else {
      this.setState({searchSort: false});
      this.sortQuestions();
    }
  }

  handleSeeMoreQues(totalArr) {
    if(this.state.searchSort) {
      this.setState({btnClick: true}); //on each button click should add 2 more questions to arr
      this.setState({searchArray: totalArr}); //TODO: once working with live data make changes here
    } else {
      this.setState({btnClick: true});
      this.setState({questionArr: totalArr});
    }
  }

  handleSeeLessQues(totalArr) {
    if(this.state.searchSort) {
      this.setState({btnClick: false});
      var temp = totalArr.slice(0, 2);
      this.setState({searchArray: temp});
    } else {
      this.setState({btnClick: false});
      var tempArr = totalArr.slice(0, 2);
      this.setState({questionArr: tempArr});
    }
  }

  handleAddQues() {
    this.setState({addClick: true});
  }

  componentDidMount() {
    this.sortQuestions();
    // axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions',
    //   {headers: {'Authorization': `${API_KEY}`},
    //   params: {count: 5, page: 1, product_id: 66674 }})
    //     .then((res) => console.log('Q&A at product_id: ', res.data))
    //     .catch((err) => console.log(err));
  }



  render() {
    let addQuestion;
    if (this.state.addClick) {
      addQuestion = <AddQuestion />
    } else {
      addQuestion = <span></span>
    }




    let moreQBtn;
    if (this.state.totalQuesArr.length > 2) {
      moreQBtn = <button onClick={(e) => this.handleSeeMoreQues(this.state.totalQuesArr)}>See More Questions</button>
    } else {
      moreQBtn = <span></span>
    }
    if (this.state.btnClick) {
      moreQBtn = <button onClick={(e) => this.handleSeeLessQues(this.state.totalQuesArr)}>See Less Questions</button>
    }




    let toRender;
    var index = 1;
    if (this.state.searchSort) {
      toRender =
      this.state.searchArray.map((qItem) =>
        <ul>
          <span>{index++}</span>
          <QuestionComp questionList={qItem}/>
          <AnswerComp answerList={qItem.answers}/>
        </ul>
        );
    } else {
      toRender =
      this.state.questionArr.map((qItem) =>
        <ul>
          <QuestionComp questionList={qItem}/>
          <AnswerComp answerList={qItem.answers}/>
        </ul>
        );
    }



    return(
      <div id="QList">
        <h1 id="QATitle">Questions and Answers</h1>
        <form>
          <h1>Search: </h1>
          <input type='text' placeholder='Have a question? Search for answers...' onChange={this.handleSearch}></input>
        </form>
        {toRender}
        {moreQBtn}
        <button onClick={(e) => this.setState({show: true})}>Add a Question</button>
        <AddQuestion onClose={() => this.setState({show: false})} show={this.state.show} />
      </div>


    )
  }

}

export default QList;
