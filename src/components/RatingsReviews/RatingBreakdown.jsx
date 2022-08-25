import React from "react";

function RatingBreakdown ({ reviews }) {

  function averageRating() {
    var sum = 0;
    for (var review of reviews) {
      sum += review.rating;
    }
    return Math.round((sum / reviews.length) * 10) / 10
  }

  function recPercentage() {
    var count = 0;
    for (var review of reviews) {
      if (review.recommend)
        count++
    }
    return Math.round((count / reviews.length) * 100)
  }

  return (
    <>
      <div className='ratingSummary'>
        <h1>{averageRating()}</h1>
        {/* <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div> */}
        <div>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </div>
      </div>

      <div className='breakdown'>
        <table>
          <tbody>
            <tr>
              <td><a href=''>5 stars</a></td>
              <td><meter value="2" min="0" max="5"></meter></td>
            </tr>
            <tr>
              <td><a href=''>4 stars</a></td>
              <td><meter value="3" min="0" max="5"></meter></td>
            </tr>
            <tr>
              <td><a href=''>3 stars</a></td>
              <td><meter value="1" min="0" max="5"></meter></td>
            </tr>
            <tr>
              <td><a href=''>2 stars</a></td>
              <td><meter value="1" min="0" max="5"></meter></td>
            </tr>
            <tr>
              <td><a href=''>1 stars</a></td>
              <td><meter value="4" min="0" max="5"></meter></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='recommendations'>
        <h4>{recPercentage()}% of reviewers recommend this product</h4>
      </div>

    </>
  )
}

export default RatingBreakdown;