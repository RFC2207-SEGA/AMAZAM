import React from 'react';

function RatingBreakdown ({ meta }) {

  function avgRating() {
    var sum = 0;
    var totalReviews = 0;
    for (var starRating in meta.ratings) {
      sum += starRating * parseInt(meta.ratings[starRating])
      totalReviews += parseInt(meta.ratings[starRating])
    }
    return Math.round((sum / totalReviews) * 10) / 10
  }

  function recPercentage() {
    var totalReviews = 0;
    var yesCount = 0
    for (var vote in meta.recommended) {
      if (vote === 'true') {
        yesCount += parseInt(meta.recommended[vote])
        totalReviews += parseInt(meta.recommended[vote])
      } else {
        totalReviews += parseInt(meta.recommended[vote])
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
      ratingsPerStar[starRating] = parseInt(meta.ratings[starRating])
      totalRatings += parseInt(meta.ratings[starRating])
    }
    for (var key in ratingsPerStar) {
      starPct[key] = Math.round(ratingsPerStar[key] / totalRatings * 100)
    }
  }
  starPercentage()


  return (
    <div className='ratingsBreakdownContainer'>
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
                <div className='barGraphUnderlay'></div>
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

    </div>
  )
}

export default RatingBreakdown;