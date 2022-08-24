import React from "react";
import { FaStar } from 'react-icons/fa';


function ReviewTile ({ review }) {
  console.log('review', review)
  return (
    <>
      <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
      <span>{review.reviewer_name}</span>, <span>{review.date}</span>
      <p>{review.summary}</p>
      <p>{review.body}</p>
      <p>Helpful? Yes ({review.helpfulness})</p>
      <p>Report</p>
    </>
  )
}

export default ReviewTile;