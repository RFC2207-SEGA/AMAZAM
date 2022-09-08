import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import RatingsReviews from '../src/components/RatingsReviews/RatingsReviews.jsx';


describe('Ratings and Reviews - Review Tile', function() {
  const user = userEvent.setup();

  const { rerender } = render(<RatingsReviews
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
    reviews={
      [
        {
            "review_id": 1276391,
            "rating": 2,
            "summary": "Jan",
            "recommend": false,
            "response": null,
            "body": "People underestimate Michael. There are plenty of things that he is well above average at. Like ice skating. He is a very good ice skater.",
            "date": "2022-09-04T00:00:00.000Z",
            "reviewer_name": "Jan",
            "helpfulness": 2,
            "photos": []
        },
        {
            "review_id": 1276337,
            "rating": 2,
            "summary": "hello world",
            "recommend": true,
            "response": null,
            "body": "Hello world!",
            "date": "2022-09-02T00:00:00.000Z",
            "reviewer_name": "Adam",
            "helpfulness": 1,
            "photos": []
        }
      ]
    }
  />)

    rerender(<RatingsReviews
    reviewMeta={
      {
        "product_id": "66644",
        "ratings": {
            "3": "7",
            "4": "1",
            "5": "3"
        },
        "recommended": {
            "true": "11"
        },
        "characteristics": {
            "Fit": {
                "id": 223577,
                "value": "2.0000000000000000"
            },
            "Length": {
                "id": 223578,
                "value": "2.2857142857142857"
            },
            "Comfort": {
                "id": 223579,
                "value": "2.3636363636363636"
            },
            "Quality": {
                "id": 223580,
                "value": "2.4285714285714286"
            }
        }
      }
    }
    product=
    {
      {
        "id": 66644,
        "campus": "hr-rfc",
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": "40.00",
        "created_at": "2022-03-31T21:13:15.875Z",
        "updated_at": "2022-03-31T21:13:15.875Z"
      }
    }
  reviews={
    [
      {
          "review_id": 1176388,
          "rating": 3,
          "summary": "Don't delete my big face cat",
          "recommend": true,
          "response": null,
          "body": "Don't delete my big face catDon't delete my big face catDon't delete my big face cat",
          "date": "2022-04-15T00:00:00.000Z",
          "reviewer_name": "qiqi",
          "helpfulness": 12,
          "photos": [
              {
                  "id": 2259515,
                  "url": "https://i.ibb.co/gMVttjv/images.webp"
              }
          ]
      },
      {
          "review_id": 1176366,
          "rating": 3,
          "summary": "kkkkkkkkkk",
          "recommend": true,
          "response": null,
          "body": "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
          "date": "2022-04-14T00:00:00.000Z",
          "reviewer_name": "qiqi",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2259512,
                  "url": "https://i.ibb.co/4TzFDhy/images.jpg"
              }
          ]
      },
      {
          "review_id": 1176359,
          "rating": 3,
          "summary": "kkkkkkk",
          "recommend": true,
          "response": null,
          "body": "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
          "date": "2022-04-14T00:00:00.000Z",
          "reviewer_name": "kk",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2259507,
                  "url": "https://i.ibb.co/4TzFDhy/images.jpg"
              }
          ]
      },
      {
          "review_id": 1176358,
          "rating": 3,
          "summary": "kkkkkkk",
          "recommend": true,
          "response": null,
          "body": "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
          "date": "2022-04-14T00:00:00.000Z",
          "reviewer_name": "kk",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2259506,
                  "url": "https://i.ibb.co/4TzFDhy/images.jpg"
              }
          ]
      },
      {
          "review_id": 1176340,
          "rating": 5,
          "summary": "It",
          "recommend": true,
          "response": null,
          "body": "Works",
          "date": "2022-04-14T00:00:00.000Z",
          "reviewer_name": "paul",
          "helpfulness": 0,
          "photos": []
      }
    ]
  }
  />)


  it('should contain reviewer recommendation status', () => {
    expect(screen.getByTestId('reviewer-name-and-date')).toBeInTheDocument()
  });

});




