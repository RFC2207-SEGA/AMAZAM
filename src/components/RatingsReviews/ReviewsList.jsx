import React from 'react';
import ReviewTile from './ReviewTile.jsx';

function ReviewsList ({ reviews }) {
  return (
    <div className='reviews-list'>
      {reviews.map((review) =>
        <ReviewTile review={review} key={review.review_id} />
      )}
    </div>
  )
}

export default ReviewsList;