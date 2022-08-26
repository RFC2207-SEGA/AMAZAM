import React from "react";
import ReviewTile from './ReviewTile.jsx';

function ReviewsList ({ reviews }) {
  return (
    <>
      {reviews.map(review =>
        <ReviewTile review={review} key={review.review_id} />
      )}
    </>
  )
}

export default ReviewsList;