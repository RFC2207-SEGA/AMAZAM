import React from "react";

function RatingBreakdown ({ meta }) {

  function avgRating() {
    var sum = 0;
    var reviewCount = 0;
    for (var starRating in meta.ratings) {
      sum += starRating * meta.ratings[starRating];
      reviewCount += meta.ratings[starRating]
    }
    return Math.round((sum / reviewCount) * 10) / 10
  }

  function recPercentage() {
    var totalReviews = 0;
    var yesCount = 0
    for (var vote in meta.recommended) {
      if (vote === '1') {
        yesCount += meta.recommended[vote]
        totalReviews += meta.recommended[vote]
      } else {
        totalReviews += meta.recommended[vote]
      }
    }
    return Math.round((yesCount / totalReviews) * 100)
  }

  return (
    <>
      <div className='ratingSummary'>
        <h1>{avgRating()}</h1>
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