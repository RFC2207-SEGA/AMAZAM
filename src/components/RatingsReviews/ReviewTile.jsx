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
        <div className='sellerResponse'>
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
    <div className='reviewTile'>
      <div>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ({review.rating})</div>
      <span className='reviewer-name-and-date'>{review.reviewer_name}</span>, <span>{formatDate(review.date)}</span>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>

      <div>
        {review.photos.map((photo, index) =>
          <img className='reviewThumbnail' src={`${photo.url}`} key={photo.id}></img>
        )}
      </div>

      <div>{reviewerRec()}</div>

      <div>{sellerResponse()}</div>

      <div>
        <span>Helpful? </span>
        <a href="">Yes</a>
        <span> ({review.helpfulness}) </span>
        <a href="">No</a>
      </div>

      <a href="">Report</a>
    </div>
  )
}

export default ReviewTile;
