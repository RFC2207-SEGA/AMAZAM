import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import RatingsReviews from '../src/components/RatingsReviews/RatingsReviews.jsx';


describe('First test', function() {
  const user = userEvent.setup();

  render(<RatingsReviews />)

  it('should find the first review on the page', () => {
    return waitFor(() => expect(screen.getByText('Mazie13')).toBeInTheDocument())
      .then(() => {
        expect(screen.getByText('July 19, 2021')).toBeInTheDocument()
      })
  });
});
