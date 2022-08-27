import React from "react";


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
          <strong>Seller Response:</strong>
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
    <>
      <div>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </div>
      <span>{review.reviewer_name}</span>, <span>{formatDate(review.date)}</span>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>

      <div>
        {review.photos.map((photo, index) =>
          <img src={`"${photo.url}"`} key={photo.id}></img>
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
    </>
  )
}

export default ReviewTile;