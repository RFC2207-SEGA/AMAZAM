import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import QList from '../src/components/Q&A/QList.jsx';
import QuestionComp from '../src/components/Q&A/QuestionComp.jsx';
import axios from 'axios';
import App from '../src/index.jsx';



axios.defaults.baseURL = 'http://localhost:3000';

describe('Q&A Test', function() {
  const user = userEvent.setup();

  render(<QList />, <QuestionComp />)

  it('should start with highest Helpful number first', () => {
    expect(screen.getAllByTestId('numHelp')[0]).toHaveTextContent('10');
    return user.click(screen.getAllByRole('button', {name: 'Yes?'})[0])
      .then(() => {
        expect(screen.getAllByTestId('numHelp')[0]).toHaveTextContent('11');
      })
  });
});