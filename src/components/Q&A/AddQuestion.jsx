import React from "react";
import ReactDOM from "react-dom";
import {API_KEY} from '../../config/config.js';
const axios = require('axios');

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qBody: '',
      qName: '',
      qEmail: ''
    }

    this.questionPost = this.questionPost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  questionPost(e) {
    e.preventDefault();
    console.log(this.state.qBody, this.state.qName, this.state.qEmail, this.props.currentProductID);
    var tempID = parseInt(this.props.currentProductID);
    console.log(tempID)
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions',
      {body: this.state.qBody, name: this.state.qName, email: this.state.qEmail, product_id: tempID},
      {headers: {'Authorization': `${API_KEY}`}})
      .then((res) => {console.log(res)})
      .catch((err) => {console.log(err)});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.questionPost(e);
    this.props.onClose(e);
  }






  render() {
    if (!this.props.show) {
      return null;
    }
    return(
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <span><button className='modal-button-close' onClick={this.props.onClose}>X</button></span>
            <h4 className='modal-title'>Ask Your Question </h4>
            <h5 className='modal-subtitle'>About Product {this.props.currentProduct}</h5>
          </div>
          <div className='modal-body'>
            Question Content
            <form onSubmit={(e) => this.handleSubmit(e)} >
              <div>Your Question: </div><input type='text' onChange={(e) => this.setState({qBody: e.target.value})} required/>
              <div>Nickname: </div><input type='text' placeholder="Example: jackson11!" onChange={(e) => this.setState({qName: e.target.value})} required/>
              <div>Your Email: </div><input type='text' onChange={(e) => this.setState({qEmail: e.target.value})} required/>
              <p>For authentication reasons, you will not be emailed</p>
              <div className='modal-footer'>
                <button className='modal-button' >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }




}




export default AddQuestion;