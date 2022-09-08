import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import RatingsReviews from '../src/components/RatingsReviews/RatingsReviews.jsx';

render(<RatingsReviews
  reviewMeta={
    {
      "product_id": "66642",
      "ratings": {
          "1": "1",
          "2": "5",
          "3": "21",
          "4": "30",
          "5": "37"
      },
      "recommended": {
          "false": "16",
          "true": "78"
      },
      "characteristics": {
          "Fit": {
              "id": 223572,
              "value": "3.0897435897435897"
          },
          "Length": {
              "id": 223573,
              "value": "3.1772151898734177"
          },
          "Comfort": {
              "id": 223574,
              "value": "3.3164556962025316"
          },
          "Quality": {
              "id": 223575,
              "value": "3.3026315789473684"
          }
      }
    }
  }
  product={
    {
      "id": 66642,
      "campus": "hr-rfc",
      "name": "Camo Onesie",
      "slogan": "Blend in to your crowd",
      "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      "category": "Jackets",
      "default_price": "140.00",
      "created_at": "2022-03-31T21:13:15.875Z",
      "updated_at": "2022-03-31T21:13:15.875Z"
    }
  }
/>)

describe('Ratings and Reviews - Ratings Breakdown', function() {
  const user = userEvent.setup();

    it('should contain the stars component', () => {
      expect(screen.getByTestId('stars')).toBeInTheDocument()
    });
});


describe('Ratings and Reviews - Add Review', function() {
  const user = userEvent.setup();

    it('should open the Add A Review modal on click', () => {
      return user.click(screen.getByRole('button', {name: 'Add A Review'}))
      .then(() => {
        expect(screen.getByText('Write Your Review')).toBeInTheDocument()
        expect(screen.getByText('About the Camo Onesie')).toBeInTheDocument()
      })
    });

    it('should toggle a star on click', () => {
      expect(document.getElementById('1')).toHaveClass('fa-regular fa-star');
      return user.click(document.getElementById('1'))
      .then(() => {
        expect(document.getElementById('1')).toHaveClass('fa-solid fa-star');
      })
    });

    it('should select a recommendation response of Yes or No on click', () => {
      return user.click(screen.getByTestId('recommend-yes'))
      .then(() => {
        expect(screen.getByTestId('recommend-yes')).toBeChecked()
        expect(screen.getByTestId('recommend-no')).not.toBeChecked()
      })
    });

    it('should accept a body of no more than 60 characters', () => {
      let testSummaryOverLimit = 'This is a test body message with over 60 characters and should not be accepted'
      let testSummaryUnderLimit = 'This is a test body message under 60 chars.'
      return user.type(screen.getByLabelText(/summary/i), testSummaryOverLimit)
      expect(screen.getByLabelText(/summary/i)).not.toHaveValue(testSummaryOverLimit)
      .then(() => {
        return user.type(screen.getByLabelText(/summary/i), testSummaryUnderLimit)
        expect(screen.getByLabelText(/summary/i)).toHaveValue(testSummaryUnderLimit)
      })
    });

    it('should accept a summary of no less than 50 characters', () => {
      let testBodyUnder50 = 'This is a test summary message with 50 chars'
      let testBodyOver50 = 'This is a test summary message with well over 50 chars.'
      return user.type(screen.getByLabelText(/body/i), testBodyUnder50)
      expect(screen.getByText('Minimum required characters left:')).toBeInTheDocument
      .then(() => {
        return user.type(screen.getByLabelText(/body/i), testBodyOver50)
        expect(screen.getByText('Minimum reached')).toBeInTheDocument
      })
    });

});




