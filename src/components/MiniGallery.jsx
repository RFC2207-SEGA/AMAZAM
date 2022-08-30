import React from 'react';
import MiniPhoto from './MiniPhoto.jsx'

class MiniGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tinyPhotos: [],
      index: 0,
    }
  }

  componentDidUpdate() {
    if (this.props.photos.indexOf(this.state.tinyPhotos[this.state.index]) === -1) {
      this.photosInArray(this.props.index);
    }
  }

  photosInArray(index, resultPhotos = []) {
    var index = index;
    console.log('index: ', index);
    if (this.props.photos.length < 7) {
      this.setState({ 'tinyPhotos': this.props.photos, 'index': 0 })
      return;
    } else {
      this.setState({ 'tinyPhotos': this.props.photos.slice(index, index + 7), 'index': index })
      return;
    }
    // if (index < 0) {
    //   index = 0;
    // }
    // for (let j = index; j < this.props.photos.length; j++) {
    //   resultPhotos.push(this.props.photos[j])
    // }
    // if (resultPhotos.length > 7) {
    //   resultPhotos = resultPhotos.slice(0, 7);
    // }
    // if (resultPhotos.length === 7) {
    //   console.log(resultPhotos);
    //   this.setState({ 'tinyPhotos': resultPhotos })
    //   return;
    // }
    // this.photosInArray(0, resultPhotos)
  }

  render() {
    if (this.state.index === 0) {
      if (7 > this.props.photos.length) {
        return (
          <div className="mini-carousel">
            {this.state.tinyPhotos.map((photo, index, photos) => (
              <MiniPhoto photo={photo} bigPhoto={this.props.photos[this.props.index]} bigPhotoIndex={this.props.index} onClick={this.props.onClick} index={this.state.index + index} />))}
          </div>
        )
      }
      return (
        <div className="mini-carousel">
          {this.state.tinyPhotos.map((photo, index, photos) => (
            <MiniPhoto photo={photo} bigPhoto={this.props.photos[this.props.index]} bigPhotoIndex={this.props.index} onClick={this.props.onClick} index={this.state.index + index} />))}
          <a className="down-arrow" onClick={() => { this.photosInArray(this.state.index + 1) }}>+</a>
        </div>
      )
    } else if (this.state.index + 7 === this.props.photos.length) {
      return (
        <div className="mini-carousel">
          <a className="up-arrow" onClick={() => { this.photosInArray(this.state.index - 1) }}>-</a>
          {this.state.tinyPhotos.map((photo, index, photos) => (
            <MiniPhoto photo={photo} bigPhoto={this.props.photos[this.props.index]} bigPhotoIndex={this.props.index} onClick={this.props.onClick} index={this.state.index + index} />))}
        </div>)
    } else {
      return (
        <div className="mini-carousel">
          <a className="up-arrow" onClick={() => { this.photosInArray(this.state.index - 1) }}>-</a>
          {this.state.tinyPhotos.map((photo, index, photos) => (
            <MiniPhoto photo={photo} bigPhoto={this.props.photos[this.props.index]} bigPhotoIndex={this.props.index} onClick={this.props.onClick} index={this.state.index + index} />))}
          <a className="down-arrow" onClick={() => { this.photosInArray(this.state.index + 1) }}>+</a>
        </div>
      )
    }
  }
}

export default MiniGallery;