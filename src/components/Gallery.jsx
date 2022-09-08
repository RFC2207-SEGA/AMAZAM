import React from 'react';
import Photo from './Photo.jsx';
import FullscreenModal from './FullscreenModal.jsx'
import MiniGallery from './MiniGallery.jsx'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  display(index) {
    if (index === (this.props.index -1)) {
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
        <Photo photo={photo} last={this.props.style.photos.length - 1} index={this.props.style.photos.indexOf(photo)} display={this.display.bind(this)} next={this.props.movePhoto} prev={this.props.movePhoto} triggerModal={this.triggerModal.bind(this)} photos={this.props.style.photos}/>))}
        <MiniGallery photos={this.props.style.photos} index={this.props.index - 1} onClick={this.props.movePhoto}/>
        <FullscreenModal show={this.state.showModal} photo={this.props.style.photos[this.props.index - 1]} index={this.props.index - 1} last={this.props.style.photos.length - 1} toggleModal={this.triggerModal.bind(this)} next={this.props.movePhoto} prev={this.props.movePhoto} photos={this.props.style.photos} onClick={this.props.movePhoto}/>
      </div>
    )
  }
}

export default Gallery;