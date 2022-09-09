import React from 'react';
import ReviewTile from './ReviewTile.jsx';

function ReviewsList ({ reviews, reviewsToDiplay }) {

  return (
    <div className='reviews-list' style={{overflowY: reviewsToDiplay > 2 ? 'scroll' : 'hidden'}}>
      {reviews.map((review) =>
        <ReviewTile review={review} key={review.review_id} />
      )}
    </div>
  )
}

export default ReviewsList;