import React from 'react'
import axios from 'axios'
const { API_KEY } = process.env

class ReviewReport extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewReported: false
    }
    this.handleReportClick = this.handleReportClick.bind(this)
  }

  handleReportClick(e) {
    e.preventDefault()
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${this.props.review.review_id}/report`,
      {},
      { headers: { Authorization: API_KEY } })
      .then((res) => {
        console.log('report review res:', res)
      })
      .catch(err => console.log(err))
    this.setState({ reviewReported: true })
  }

  render() {
    return (
        this.state.reviewReported ?
          (<span className='reviews-anchors'>Thank you for your feedback!</span>)
          :
          (<a className='reviews-anchors' onClick={this.handleReportClick} href="">Report</a>)

    )
  }
}

export default ReviewReport;
