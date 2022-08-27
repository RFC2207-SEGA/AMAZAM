import React from "react";
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          "product": "2",
          "page": 0,
          "count": 5,
          "results": [
            {
              "review_id": 5,
              "rating": 3.6,
              "summary": "I'm enjoying wearing these shades",
              "recommend": true,
              "response": null,
              "body": "Comfortable and practical.",
              "date": "2019-04-14T00:00:00.000Z",
              "reviewer_name": "shortandsweeet",
              "helpfulness": 5,
              "photos": [{
                  "id": 1,
                  "url": "urlplaceholder/review_5_photo_number_1.jpg"
                },
                {
                  "id": 2,
                  "url": "urlplaceholder/review_5_photo_number_2.jpg"
                }
              ]
            },
            {
              "review_id": 3,
              "rating": 4.5,
              "summary": "I am liking these glasses",
              "recommend": false,
              "response": "Glad you're enjoying the product!",
              "body": "They are very dark. But that's good because I'm in very sunny spots",
              "date": "2019-06-23T00:00:00.000Z",
              "reviewer_name": "bigbrotherbenjamin",
              "helpfulness": 8,
              "photos": [],
            }
          ]
        }
      ],
      meta: {
        "product_id": "2",
        "ratings": {
          2: 1,
          3: 3,
          4: 5,
        },
        "recommended": {
          0: 5,
          1: 2,
        },
        "characteristics": {
          "Size": {
            "id": 14,
            "value": "4.0000"
          },
          "Width": {
            "id": 15,
            "value": "3.5000"
          },
          "Comfort": {
            "id": 16,
            "value": "4.0000"
          },
        }
      },
      sort: 'relevant'
    }

    this.handleSort = this.handleSort.bind(this);
  }

  // This may be replaced by the axios sort param
  handleSort(e) {
    e.preventDefault();
    this.setState({sort: e.target.value})
  }

  render() {
    return (
      <>
        <div className='ReviewsRatingsHdr'>Ratings &amp; Reviews</div>

        <div className='ReviewsRatings'>
          <div className='Breakdowns'>
            <div className='RatingBreakdown'><RatingBreakdown meta={this.state.meta}/></div>
            <div className='ProductBreakdown'><ProductBreakdown meta={this.state.meta}/></div>
          </div>

          <div className='ReviewsList'>
            <span>{`${this.state.reviews[0].results.length} reviews, sorted by `}</span>
            <span>
              <select onChange={this.handleSort}>
                <option value='relevant'>Relevant</option>
                <option value='helpful'>Helpful</option>
                <option value='newest'>Newest</option>
              </select>
            </span>
            <ReviewsList reviews={this.state.reviews[0].results} />
          </div>

        </div>
      </>
    )
  }
}

export default RatingsReviews;