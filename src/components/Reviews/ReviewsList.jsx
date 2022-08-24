import React from "react";
import ReviewTile from './ReviewTile.jsx';

function ReviewsList (props) {
  return (
    <>
      {props.reviews.map(review => {
        return <ReviewTile review={review} key={review.review_id} />
      })}
    </>

  )
}

export default ReviewsList;