import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import QList from '../src/components/Q&A/QList.jsx';
import QuestionComp from '../src/components/Q&A/QuestionComp.jsx';
import QuestionReport from '../src/components/Q&A/QuestionReport.jsx';
import AnswerComp from '../src/components/Q&A/AnswerComp.jsx';
import axios from 'axios';
//import App from '../src/index.jsx';
var questionItem = {
  answers: {
    5986230: {id: 5986230, body: 'it is ok', date: '2022-07-14T00:00:00.000Z', answerer_name: 'haha', helpfulness: 14},
    5987363: {id: 5987363, body: 'whatever', date: '2022-07-31T00:00:00.000Z', answerer_name: 'jack', helpfulness: 9},
    5987679: {id: 5987679, body: 'test 2', date: '2022-08-31T00:00:00.000Z', answerer_name: 'Jacob', helpfulness: 1},
    5987680: {id: 5987680, body: 'More answers!', date: '2022-08-31T00:00:00.000Z', answerer_name: 'Jacob', helpfulness: 0},
  },
  asker_name: "erter",
  question_body: "erter",
  question_date: "2022-06-03T00:00:00.000Z",
  question_helpfulness: 24,
  question_id: 641682,
  reported: false,
}


axios.defaults.baseURL = 'http://localhost:3000';

describe('Q&A QuestionComp Test', function() {
  const user = userEvent.setup();

  render(<QuestionComp questionList={questionItem}/>)

  it('Button should iterate helpful number', () => {
    var numhelp = questionItem.question_helpfulness;
    expect(screen.getAllByTestId('numHelp')[0]).toHaveTextContent(numhelp);
    return user.click(screen.getAllByRole('button', {name: 'Yes?'})[0])
      .then(() => {
        expect(screen.getAllByTestId('numHelp')[0]).toHaveTextContent(numhelp+1);
      })
  });
});

describe('Q&A AnswerComp Test', function() {
  const user = userEvent.setup();

  render(<QList product={{
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
  }}/>, <QuestionComp questionList={questionItem}/>, <AnswerComp quesID={66642}/>)

  it('Should have Date and format it', () => {
    waitFor(() => expect(screen.getByTestId('date')).toBeInTheDocument());
  });

  it('Button should iterate helpful number', () => {
    return user.click(screen.findAllByTestId('AnsHelp')[0])
    .then(() => {
      expect(screen.findAllByTestId('ansnumHelp')[0]).toBeInTheDocument();
    })
  });

});


describe('Q&A QList Test', function() {
  const user = userEvent.setup();

  render(<QList product={{
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
  }}/>)

  it('Should have title', () => {
    waitFor(() =>  expect(screen.queryAllByTestId('title')).toBeInTheDocument());

  });
  it('Should have Search input', () => {
    waitFor(() => expect(screen.queryByTestId('search')).toBeInTheDocument());

  });
  it('Button too add question should exist', () => {
    waitFor(() => expect((screen.findByRole('button', {name: 'Add a Question', hidden: true}))).toBeInTheDocument());

  });
});

//waitFor(() =>  );

// it('', () => {
// });





