import React from 'react';
import MiniPhoto from './MiniPhoto.jsx'

class MiniGallery extends React.Component {
  constructor (props) {
    super(props)
    this.state ={
      tinyPhotos:[],
    }
  }

  componentDidUpdate() {
    if (this.state.tinyPhotos[this.props.index] !== this.props.photos[this.props.index]) {
      this.photosInArray();
    }
  }

  photosInArray(index, resultPhotos = []) {
    var index = index || this.props.index;
    if (this.props.photos.length < 7) {
      this.setState({ 'tinyPhotos': this.props.photos })
      return;
    } else {
      this.setState({ 'tinyPhotos': this.props.photos.slice(0, 7)})
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
    return (
      <div className="mini-carousel">
        <a className="up-arrow" onClick={() => {this.photosInArray(this.props.index - 1)}}>-</a>
        {this.state.tinyPhotos.map((photo, index, photos) => (
        <MiniPhoto photo={photo} bigPhoto={this.props.photos[this.props.index]} bigPhotoIndex={this.props.index} onClick={this.props.onClick} index={index}/>))}
        <a className="down-arrow" onClick={() => {this.photosInArray(this.props.index + 1)}}>+</a>
      </div>
    )
  }
}

export default MiniGallery;