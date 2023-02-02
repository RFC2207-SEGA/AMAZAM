import React from 'react'

class ReviewThumbnailExpand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      chosenPhotoIdx: 0
    }
    this.handleCloseReviewThumbnailModal = this.handleCloseReviewThumbnailModal.bind(this)
  }

  handleCloseReviewThumbnailModal(e) {
    e.preventDefault()
    this.setState({ showModal: false })
    console.log('closed thumbnail')
  }

  render() {
    return (
      <>
        {this.props.photos.map((photo, index) =>
          <img
            key={photo.id}
            className='review-thumbnail'
            src={`${photo.url}`}
            onClick={() => this.setState({ showModal: true, chosenPhotoIdx: index })}>
          </img>
        )}

        {
          this.state.showModal ?
            (
              <div className="review-thumbnail-modal-background">
                <div className="review-thumbnail-expanded" style={{ backgroundImage: `url(${this.props.photos[this.state.chosenPhotoIdx].url})` }}>
                  <i onClick={this.handleCloseReviewThumbnailModal} className="fa-solid fa-x review-thumbnail-modal-close-btn"></i>
                </div>
              </div>
            )
            :
            null
        }
      </>
    )
  }
}

export default ReviewThumbnailExpand;
