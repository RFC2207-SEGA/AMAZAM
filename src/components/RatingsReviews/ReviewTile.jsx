import React from 'react'
import axios from 'axios'
import Stars from '../../../src/components/Stars.jsx'
import ReviewReport from '../../../src/components/RatingsReviews/ReviewReport.jsx'
import ReportHelpfulness from '../../../src/components/RatingsReviews/ReportHelpfulness.jsx'
import ReviewThumbnailExpand from '../../../src/components/RatingsReviews/ReviewThumbnailExpand.jsx'
const { API_KEY } = process.env

function ReviewTile ({ review }) {

  function reviewerRec() {
    if (review.recommend) {
      return <div className='reviewer-rec-yes'> <i className="fa-solid fa-check"></i> I recommend this product </div>
    }
  }

  function sellerResponse() {
    if (review.response) {
      return (
        <div className='seller-response'>
          <p>Seller Response:</p>
          <p>{review.response}</p>
        </div>
      )
    }
  }

  function formatDate(dateStr){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(review.date).toLocaleDateString([],options);
  }

  return (
    <div className='review-tile'>
      <div className='stars-username-date'>
        <span><Stars rating={review.rating}/></span>
        <span data-testid='reviewer-name-and-date' >
          <span>{review.reviewer_name}</span>, <span>{formatDate(review.date)}</span>
        </span>

      </div>

      <p className='review-summary'>{review.summary}</p>
      <p className='review-body'>{review.body}</p>

      <div>
        <ReviewThumbnailExpand photos={review.photos}/>
      </div>

      <div>{reviewerRec()}</div>

      <div>{sellerResponse()}</div>

      <div className='vote-helpfulness-and-report'>

        <span>
          <ReportHelpfulness review={review} />
          &nbsp;|&nbsp;
          <ReviewReport review={review} />
        </span>
      </div>

    </div>
  )
}

export default ReviewTile;
