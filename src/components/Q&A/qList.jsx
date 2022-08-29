import React from "react";
import AnswerComp from "./AnswerComp.jsx"
import QuestionComp from "./QuestionComp.jsx"
import SearchQuestions from './SearchQuestions.jsx'
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
        ]
      },
      page: 1,
      count: 5,
      questionArr: [],
      searchedTerm: ''
    }

    this.sortQuestions = this.sortQuestions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  sortQuestions() {
    var qArr = this.state.productQ.results;
    if (qArr.length > 1) {
      for (var i = 0; i < qArr.length; i++) {
        if(qArr[i+1]) {
          if(qArr[i].question_helpfulness < qArr[i+1].question_helpfulness) {
            var temp = qArr[i];
            qArr[i] = qArr[i+1];
            qArr[i+1] = temp;
          }
        }
      }
      this.setState({questionArr: qArr});
    }
    this.setState({questionArr: qArr});
  }

  handleSearch(e) {
    console.log(e.target.value);
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


    return(
      <div id="QList">
        <h1 id="QATitle">Questions and Answers</h1>
        <form>
          <lable>Search: </lable>
          <input type='text' onChange={this.handleSearch}></input>
        </form>
        {this.state.questionArr.map((qItem) =>
        <ul>
          <QuestionComp questionList={qItem}/>
          <AnswerComp answerList={qItem.answers}/>
        </ul>
        )}
      </div>


    )
  }

}

export default QList;
