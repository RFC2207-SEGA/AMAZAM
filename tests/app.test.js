import React from 'react';
import '@testing-library/jest-dom'
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../src/index.jsx';
import axios from 'axios';
import Overview from '../src/components/Overview'

axios.defaults.baseURL = 'http://localhost:3000';

describe('Jest Workshop', function () {
  const user = userEvent.setup();

  render(<App />)
})