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




  var totalRatings = 0;
  var starPct = {};
  var ratingsPerStar = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  }

  function starPercentage() {
    for (var starRating in meta.ratings) {
      ratingsPerStar[starRating] = meta.ratings[starRating]
      totalRatings += meta.ratings[starRating]
    }
    for (var key in ratingsPerStar) {
      starPct[key] = Math.round(ratingsPerStar[key] / totalRatings * 100)
    }
  }
  starPercentage()


  return (
    <>
      <div className='ratingSummary'>
        <span>{avgRating()}</span><span> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </span>
      </div>

      <table className='ratingsBreakdownTable'>
        <tbody>
        {Object.entries(starPct).reverse().map(([key, value], index) => {
          return (
            <tr key={index}>
              <td><a href=''>{key} stars</a></td>
              <td className='barGraphContainer'>
                <div className='barGraph'></div>
                <div className='barGraphOverlay' style={{'width': `${value}%`}}></div>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>

      <div className='recommendations'>
        <p>{recPercentage()}% of reviewers recommend this product</p>
      </div>

    </>
  )
}

export default RatingBreakdown;