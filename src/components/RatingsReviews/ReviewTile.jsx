import React from "react";
import { FaStar, FaCheck } from 'react-icons/fa';


function ReviewTile ({ review }) {

  function recommend() {
    if (review.recommend) {
      return <div> <FaCheck/> I recommend this product </div>
    }
  }

  function sellerResponse() {
    if (review.response) {
      return (
        <div className='sellerResponse'>
          <strong>Response:</strong>
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
      <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
      <span>{review.reviewer_name}</span>, <span>{formatDate(review.date)}</span>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>

      <div>
        {review.photos.map((photo, index) =>
          <img src={`"${photo.url}"`} key={photo.id}></img>
        )}
      </div>

      <div>{recommend()}</div>

      <div>{sellerResponse()}</div>

      <p>Helpful? Yes ({review.helpfulness})</p>
      <p>Report</p>
    </>
  )
}

export default ReviewTile;