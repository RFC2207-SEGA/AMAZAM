import React from "react";
import AnswerComp from "./AnswerComp.jsx"
import QuestionComp from "./QuestionComp.jsx"

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
                }
              }
            },
        ]
      },
      page: 1,
      count: 5
    }
  }



  render() {
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
    }

    return(
      <div id="QList">
        {qArr.map((qItem) =>
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
