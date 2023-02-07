import React from 'react'
import Stars from '../../../src/components/Stars.jsx'
import RatingsFilter from './RatingsFilter.jsx'

function RatingBreakdown({ reviews, reviewMeta, filterReviews, ratingsFiltersStatus, resetRatingsFilter }) {
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


  function clearFilters(e) {
    e.preventDefault()
    resetRatingsFilter()
  }

  return (
    <div className='ratings-breakdown-container'>

      <div>
        <span className='avg-rating' data-testid='stars'>{avgRating()} </span>
        <span className="ratings-breakdown-stars">
          <Stars rating={avgRating()} />
        </span>
        <span className='reviews-count'>({reviews.length} Reviews)</span>
      </div>

      <div className='recommendations'>
        <p>{recPercentage()}% of reviewers recommend this product</p>
      </div>

      <table className='ratings-breakdown-table'>
        <tbody>{starPercentage()}
          <RatingsFilter
            starPct={starPct}
            filterReviews={filterReviews}
            ratingsFiltersStatus={ratingsFiltersStatus}
          />
        </tbody>
      </table>

      <button className="clear-ratings-filter" onClick={clearFilters}>Clear filters</button>

    </div>
  )
}

export default RatingBreakdown
