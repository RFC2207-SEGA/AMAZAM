import React from 'react';
import Photo from './Photo.jsx';
import FullscreenModal from './FullscreenModal.jsx'
import MiniGallery from './MiniGallery.jsx'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 1,
      showModal: false,
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

  triggerModal() {
    this.setState({ 'showModal': !this.state.showModal })
  }

  render () {
    return (
      <div>
        {this.props.style.photos.map((photo) => (
        <Photo photo={photo} index={this.props.style.photos.indexOf(photo)} display={this.display.bind(this)} next={this.movePhoto.bind(this)} prev={this.movePhoto.bind(this)} triggerModal={this.triggerModal.bind(this)} photos={this.props.style.photos}/>))}
        <MiniGallery photos={this.props.style.photos}/>
        <FullscreenModal show={this.state.showModal} photo={this.props.style.photos[this.state.photoIndex]} toggleModal={this.triggerModal.bind(this)}/>
      </div>
    )
  }
}

export default Gallery;