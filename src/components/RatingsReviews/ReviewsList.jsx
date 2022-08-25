import React from "react";
import ReviewTile from './ReviewTile.jsx';

function ReviewsList ({reviews, sort}) {
  return (
    <>
      {reviews.map(review => {
        return <ReviewTile review={review} key={review.review_id} />
      })}
    </>

  )
}

export default ReviewsList;