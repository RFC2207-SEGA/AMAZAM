import React from 'react';
import Photo from './Photo.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 1,
    }
  }

  movePhoto(n) {
    let destination = this.state.photoIndex += n;
    if (destination >= 1 && destination <= this.props.style.photos.length) {
      this.setState({ 'photoIndex': destination })
    }
  }

  display(index) {
    if (index === (this.state.photoIndex-1)) {
      return true;
    }
  }

  render () {
    return (
      <div> {this.props.style.photos.map((photo) => (
        <Photo photo={photo} index={this.props.style.photos.indexOf(photo)} display={this.display.bind(this)} next={this.movePhoto.bind(this)} prev={this.movePhoto.bind(this)}/>))}
      </div>
    )
  }
}

export default Gallery;