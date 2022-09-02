import React from 'react';

function ReviewTile ({ review }) {

  function reviewerRec() {
    if (review.recommend) {
      return <div> ✔️ I recommend this product </div>
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
      <div>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ({review.rating})</div>
      <div className='reviewer-name-and-date'>
        <span>{review.reviewer_name}</span>, <span>{formatDate(review.date)}</span>
      </div>

      <h3 className='review-summary'>{review.summary}</h3>
      <p className='review-body'>{review.body}</p>

      <div>
        {review.photos.map((photo, index) =>
          <img className='review-thumbnail' src={`${photo.url}`} key={photo.id}></img>
        )}
      </div>

      <div>{reviewerRec()}</div>

      <div>{sellerResponse()}</div>

      <div className='review-helpfulness-and-report-link'>
        <span>Helpful? </span>
        <a href="">Yes</a>
        <span> ({review.helpfulness}) </span>
        <a href="">No</a>
        <br></br> <br></br>
        <div>
          <a href="">Report</a>
        </div>
      </div>

    </div>
  )
}

export default ReviewTile;
