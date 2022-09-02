import React from 'react';
import RelatedCarouselPhoto from './RelatedCarouselPhoto.jsx'

class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedPhotos: [],
      index: 0
    }
  }
  componentDidUpdate() {
    if (this.props.show && this.props.photos.indexOf(this.state.relatedPhotos[this.state.index]) === -1) {
      this.photosInArray(this.props.index);
    }
  }

  photosInArray(index, resultPhotos = []) {
    var index = index;
    if (this.props.photos.length < 4) {
      this.setState({ 'relatedPhotos': this.props.photos, 'index': 0 })
      return;
    } else {
      this.setState({ 'relatedPhotos': this.props.photos.slice(index, index + 4), 'index': index })
      return;
    }
  }

  render() {
    if (this.props.show) {
      if (this.props.photos.length < 4) {
        return (
          <div className="related-carousel-container">
            <div className="arrow-spacer">
            </div>
            {this.state.relatedPhotos.map((photo, index) => (
              <RelatedCarouselPhoto photo={photo} index={index + this.state.index} changePhoto={this.props.changePhoto} bigPhotoIndex={this.props.index} />
            ))}
            <div className="arrow-spacer">
            </div>
          </div>
        )
      }
      if (this.state.index === 0) {
        return (
          <div className="related-carousel-container">
            <div className="arrow-spacer">
            </div>
            {this.state.relatedPhotos.map((photo, index) => (
              <RelatedCarouselPhoto photo={photo} index={index + this.state.index} changePhoto={this.props.changePhoto} bigPhotoIndex={this.props.index} />
            ))}
            <div className="arrow-spacer">
            <a className="related-next" onClick={() => { this.photosInArray(this.state.index + 1) }}>&#10095;</a>
            </div>
          </div>
        )
      }
      if (this.state.index + 4 === (this.props.photos.length)) {
        return (
          <div className="related-carousel-container">
            <div className="arrow-spacer">
            <a className="related-prev" onClick={() => { this.photosInArray(this.state.index - 1) }}>&#10094;</a>
            </div>
            {this.state.relatedPhotos.map((photo, index) => (
              <RelatedCarouselPhoto photo={photo} index={index + this.state.index} changePhoto={this.props.changePhoto} bigPhotoIndex={this.props.index} />
            ))}
            <div className="arrow-spacer">
            </div>
          </div>
        )
      }
      return (
        <div className="related-carousel-container">
          <div className="arrow-spacer">
          <a className="related-prev" onClick={() => { this.photosInArray(this.state.index - 1) }}>&#10094;</a>
          </div>
          {this.state.relatedPhotos.map((photo, index) => (
            <RelatedCarouselPhoto photo={photo} index={index + this.state.index} changePhoto={this.props.changePhoto} bigPhotoIndex={this.props.index} />
          ))}
          <div className="arrow-spacer">
          <a className="related-next" onClick={() => { this.photosInArray(this.state.index + 1) }}>&#10095;</a>
          </div>
        </div>
      )
    }
    return null;
  }
}

export default RelatedCarousel;