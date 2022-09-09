import React from "react";
import ReactDOM from "react-dom";
import { API_KEY } from "../../config/config.js";
import {handleInteractions} from '../../utils.js';
import CloudinaryUploadWidget from '../../../src/components/PhotoUploadWidget.jsx'
const axios = require("axios");

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aBody: "",
      aName: "",
      aEmail: "",
      aPhotos: [],
      photoThumbnails: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.answerPost = this.answerPost.bind(this);
    this.handlePhotoUploadResponse = this.handlePhotoUploadResponse.bind(this);
  }

  answerPost(e) {
    e.preventDefault();
    handleInteractions(e, 'Q&A');
    console.log(this.state.aPhotos);
    var tempID = parseInt(this.props.qID);
    axios
      .post(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${tempID}/answers`,
        {
          body: this.state.aBody,
          name: this.state.aName,
          email: this.state.aEmail,
          photos: this.state.aPhotos,
        },
        { headers: { Authorization: `${API_KEY}` } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    handleInteractions(e, 'Q&A');
    this.answerPost(e);
    this.props.onClose(e);
    this.setState({photoThumbnails: []});
  }

  handlePhotoUploadResponse(photoURLs, thumbnailURLs) {
    //this.state.aPhotos = photoURLs
    this.setState({aPhotos: photoURLs })
    this.setState({photoThumbnails: thumbnailURLs})
  }

  render() {
    if (!this.props.showAns) {
      return null;
    }
    if (this.state.aPhotos.length < 5) {
      var displayAddPhotos = <> <CloudinaryUploadWidget handlePhotoUploadResponse={this.handlePhotoUploadResponse}/> </>
    } else {
      var displayAddPhotos = <p>Max Number of Photos 📸 Reached</p>
    }
    return (
  <div className="qa-modal">
    <div className="qa-modal-content">
      <div className="qa-modal-header">
        <span>
          <button
            className="qa-modal-button-close"
            onClick={this.props.onClose}
          >
            X
          </button>
        </span>
        <h4 className="qa-modal-title">Submit your Answer </h4>
        <h5 className="qa-modal-subtitle">
          {this.props.proName} : {this.props.qbody}
        </h5>
      </div>
      <div className="qa-modal-body">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div id='a-answer'>
            Your Answer: <br></br>
          <input
            type="text"
            maxlength='1000'
            onChange={(e) => this.setState({ aBody: e.target.value })}
            required
          />
          </div>
          <p>
            For privacy reasons, do not use your full name or email address
          </p>
          <div id='a-nickname'>
            Nickname: <br></br>
          <input
            type="text"
            maxlength='60'
            placeholder="Example: jack543!"
            onChange={(e) => this.setState({ aName: e.target.value })}
            required
          />
          </div>
          <div id='a-email'>
            Your Email: <br></br>
          <input
            placeholder="Example: jack@email.com"
            type="text"
            maxlength='60'
            onChange={(e) => this.setState({ aEmail: e.target.value })}
            required
          />
          </div>
          <div id='a-upload'>
            Upload Photos <br></br>
          {displayAddPhotos}
          {this.state.photoThumbnails.map((thumbnailURL, index) => {
            return <img src={thumbnailURL} key={index} className='review-thumbnail'></img>
          })}
          </div>
          <br></br>
          <div className="qa-modal-footer">
            <input type="submit" className="qa-modal-button" />
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}}

export default AddAnswer;
