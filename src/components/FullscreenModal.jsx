import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

class FullscreenModal extends React.Component {
  constructor (props) {
    super (props)
    this.state = {}
  }

  render () {
    if (this.props.show) {
      if (this.props.index === 0) {
        return (
          <div className='fluid'>
          <div className="fluid_image-container full-photo-modal fade">
            <div data-testid="dot-container" className="dot-container">
            {this.props.photos.map((photo, tinyIndex) => (
              <div data-testid="dot" className="dot" onClick={() => {
                if (tinyIndex > this.props.index) {
                  this.props.onClick(tinyIndex - this.props.index)
                }
                if (tinyIndex < this.props.index) {
                  this.props.onClick(-(this.props.index - tinyIndex))
                }}}
                />
            ))}
            </div>
            <div onClick={this.props.toggleModal}>
            <ReactImageMagnify data-testid="photo-modal-content" className="photo-modal-content" {...{
              smallImage: {
                isFluidWidth: true,
                src: this.props.photo.url,
              },
              largeImage: {
                src: this.props.photo.url,
                width: 2000,
                height: 2800,
              },
              enlargedImagePosition: 'over',
              enlargedImageContainerClassName: 'large-image'
            }} />
            </div>
              <a data-testid="modal-next" className="next" onClick={() => { this.props.next(1) }}>&#10095;</a>
          </div>
        </div>
        )
      }
      if (this.props.index === this.props.last) {
        return (
          <div className='fluid'>
          <div className="fluid_image-container full-photo-modal fade">
            <a data-testid="modal-prev" className="prev" onClick={() => { this.props.prev(-1) }}>&#10094;</a>
            <div data-testid="dot-container" className="dot-container">
            {this.props.photos.map((photo, tinyIndex) => (
              <div data-testid="dot" className="dot" onClick={() => {
                if (tinyIndex > this.props.index) {
                  this.props.onClick(tinyIndex - this.props.index)
                }
                if (tinyIndex < this.props.index) {
                  this.props.onClick(-(this.props.index - tinyIndex))
                }}}
                />
            ))}
            </div>
            <div onClick={this.props.toggleModal}>
            <ReactImageMagnify  data-testid="photo-modal-content" className="photo-modal-content" {...{
              smallImage: {
                isFluidWidth: true,
                src: this.props.photo.url,
              },
              largeImage: {
                src: this.props.photo.url,
                width: 2000,
                height: 2800,
              },
              enlargedImagePosition: 'over',
              enlargedImageContainerClassName: 'large-image'
            }} />
            </div>
          </div>
        </div>
        )
      }
      return (
        <div className='fluid'>
        <div className="fluid_image-container full-photo-modal fade">
          <a className="prev" onClick={() => { this.props.prev(-1) }}>&#10094;</a>
          <div data-testid="dot-container" className="dot-container">
          {this.props.photos.map((photo, tinyIndex) => (
              <div data-testid="dot" className="dot" onClick={() => {
                if (tinyIndex > this.props.index) {
                  this.props.onClick(tinyIndex - this.props.index)
                }
                if (tinyIndex < this.props.index) {
                  this.props.onClick(-(this.props.index - tinyIndex))
                }}}
                />
            ))}
          </div>
          <div onClick={this.props.toggleModal}>
          <ReactImageMagnify  data-testid="photo-modal-content" className="photo-modal-content" {...{
            smallImage: {
              isFluidWidth: true,
              src: this.props.photo.url,
            },
            largeImage: {
              src: this.props.photo.url,
              width: 2000,
              height: 2800,
            },
            enlargedImagePosition: 'over',
            enlargedImageContainerClassName: 'large-image'
          }} />
          </div>
            <a className="next" onClick={() => { this.props.next(1) }}>&#10095;</a>
        </div>
      </div>
      )
    } else {
      return null
    }
  }
}

export default FullscreenModal;