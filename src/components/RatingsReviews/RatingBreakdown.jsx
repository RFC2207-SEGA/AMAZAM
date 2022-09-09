import React from 'react';
import Stars from '../../../src/components/Stars.jsx'


function RatingBreakdown ({ reviewMeta, filterReviews }) {

  function avgRating() {
    var sum = 0;
    var totalReviews = 0;
    for (var starRating in reviewMeta.ratings) {
      sum += starRating * parseInt(reviewMeta.ratings[starRating])
      totalReviews += parseInt(reviewMeta.ratings[starRating])
    }
    return (sum / totalReviews).toFixed(1)
  }

  function recPercentage() {
    var totalReviews = 0;
    var yesCount = 0
    for (var vote in reviewMeta.recommended) {
      if (vote === 'true') {
        yesCount += parseInt(reviewMeta.recommended[vote])
        totalReviews += parseInt(reviewMeta.recommended[vote])
      } else {
        totalReviews += parseInt(reviewMeta.recommended[vote])
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
    for (var starRating in reviewMeta.ratings) {
      ratingsPerStar[starRating] = parseInt(reviewMeta.ratings[starRating])
      totalRatings += parseInt(reviewMeta.ratings[starRating])
    }
    for (var key in ratingsPerStar) {
      starPct[key] = Math.round(ratingsPerStar[key] / totalRatings * 100)
    }
  }

  return (
    <div className='ratings-breakdown-container'>
      <div>
        <span className='avg-rating' data-testid='stars'>{avgRating()} </span>
        <Stars rating={avgRating()}/>
      </div>

      <table className='ratings-breakdown-table'>
        <tbody>{starPercentage()}
        {Object.entries(starPct).reverse().map(([key, value], index) => {
          return (
            <tr key={index}>
              <td className='rating-bar-graph-label'><a onClick={(e) => {
                e.preventDefault()
                filterReviews(key)
              }} href='' className='reviews-anchors'>{key} stars</a></td>
              <td className='bar-graph-container'>
                <div className='bar-graph-underlay'></div>
                <div className='bar-graph-overlay' style={{'width': `${value}%`}}></div>
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

