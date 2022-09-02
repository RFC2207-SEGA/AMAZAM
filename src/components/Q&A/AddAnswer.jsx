import React from "react";
import ReactDOM from "react-dom";
import {API_KEY} from '../../config/config.js';
const axios = require('axios');

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aBody: '',
      aName: '',
      aEmail: '',
      aPhotos: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.answerPost = this.answerPost.bind(this);
  }


  answerPost(e) {
    e.preventDefault();
    var tempID = parseInt(this.props.qID);
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${tempID}/answers`,
    {body: this.state.aBody, name: this.state.aName, email: this.state.aEmail, photos: this.state.aPhotos},
    {headers: {'Authorization': `${API_KEY}`}})
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});

  }

  handleSubmit(e) {
    e.preventDefault();
    this.answerPost(e);
    this.props.onClose(e);

  }





  render() {
    if (!this.props.showAns) {
      return null;
    }
    return(
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <span><button className='modal-button-close' onClick={this.props.onClose}>X</button></span>
            <h4 className='modal-title'>Submit your Answer </h4>
            <h5 className='modal-subtitle'>{this.props.proID} : {this.props.qbody}</h5>
          </div>
          <div className='modal-body'>
            Answer Content
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div>Your Answer: </div><input type='text' onChange={(e) => this.setState({aBody: e.target.value})} required/>
              <div>Nickname: </div><input type='text' placeholder="Example: jack543!" onChange={(e) => this.setState({aName: e.target.value})} required/>
              <p>For privacy reasons, do not user your full name or email address</p>
              <div>Your Email: </div><input placeholder='Example: jack@email.com' type='text' onChange={(e) => this.setState({aEmail: e.target.value})} required/>
              <div className='modal-footer'>
                <input type='submit' className='modal-button'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }




}




export default AddAnswer;