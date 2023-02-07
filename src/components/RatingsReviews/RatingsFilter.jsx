import React from 'react'

class RatingsFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleFilterOnChange(key) {
    this.props.filterReviews(key)
  }

  render() {
    return (
      Object.entries(this.props.starPct).reverse().map(([key, value], index) => {
        return (
          <tr key={key}>
            <td>
              <input
                className='rating-bar-graph-checkbox'
                type='checkbox'
                value={key}
                id={key}
                checked={this.props.ratingsFiltersStatus[key] || false}
                onChange={this.handleFilterOnChange.bind(this, key)} />
              <label htmlFor={key} className='rating-bar-graph-label'>{key} stars</label>
            </td>
            <td className='bar-graph-container'>
              <div className='bar-graph-underlay'></div>
              <div className='bar-graph-overlay' style={{ 'width': `${value}%` }}></div>
            </td>
          </tr>
        )
      })
    )
  }
}

export default RatingsFilter
