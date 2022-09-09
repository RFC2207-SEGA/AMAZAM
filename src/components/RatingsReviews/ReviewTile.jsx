import React from 'react';
import Stars from '../../../src/components/Stars.jsx'

function ReviewTile ({ review }) {

  function reviewerRec() {
    if (review.recommend) {
      return <div className='reviewer-rec-yes'> <i class="fa-solid fa-check"></i> I recommend this product </div>
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
        {review.photos.map((photo, index) =>
          <img className='review-thumbnail' src={`${photo.url}`} key={photo.id}></img>
        )}
      </div>

      <div>{reviewerRec()}</div>

      <div>{sellerResponse()}</div>

      <div className='vote-helpfulness-and-report'>
        <span>Helpful? </span>
        <a className='reviews-anchors' href="">Yes</a>
        <span> ({review.helpfulness}) </span>
        <a className='reviews-anchors' href="">No</a>
        {'    |    '}
        <span>
          <a className='reviews-anchors' href="">Report</a>
        </span>
      </div>

    </div>
  )
}

export default ReviewTile;
