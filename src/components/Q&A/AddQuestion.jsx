import React from "react";
import ReactDOM from "react-dom";
const axios = require('axios');

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
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
            <h5 className='modal-subtitle'>About Product ID {this.props.currentProduct}</h5>
          </div>
          <div className='modal-body'>
            Question Content
            <form method='post' onSubmit={this.props.onClose}>
              <div>Your Question: </div><input type='text' required/>
              <div>Nickname: </div><input type='text' placeholder="Example: jackson11!" required/>
              <div>Your Email: </div><input type='text' required/>
              <p>For authentication reasons, you will not be emailed</p>
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




export default AddQuestion;