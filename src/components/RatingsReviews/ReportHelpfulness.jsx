import React from 'react'
import axios from 'axios'
const { API_KEY } = process.env

class ReportHelpfulness extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewHelpful: false
    }
    this.handleHelpfulReviewSubmit = this.handleHelpfulReviewSubmit.bind(this)
  }

  handleHelpfulReviewSubmit(e) {
    e.preventDefault()
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${this.props.review.review_id}/helpful`,
      {},
      { headers: { Authorization: API_KEY } })
      .then((res) => {
        console.log('review helpfulness res:', res)
      })
      .catch(err => console.log(err))
    this.setState({ reviewHelpful: true })
  }

  render() {
    return (
      <>
        <span>Helpful?</span>
        &nbsp;
        {
          this.state.reviewHelpful ?
            (<span className='review-tile-voting-btns-clicked'>Thanks for your feedback! ({this.props.review.helpfulness + 1})</span>)
            :
            (
              <>
                <span className='review-tile-voting-btns' onClick={this.handleHelpfulReviewSubmit}>Yes</span>
                <span> ({this.props.review.helpfulness})</span>
              </>
            )
        }
      </>
    )
  }
}

export default ReportHelpfulness;
