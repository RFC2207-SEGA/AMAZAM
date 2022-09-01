import React from "react";
import ReactDOM from "react-dom";
const axios = require('axios');

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
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
            <form method='post' onSubmit={this.props.onClose}>
              <div>Your Answer: </div><input type='text' required/>
              <div>Nickname: </div><input type='text' placeholder="Example: jack543!" required/>
              <p>For privacy reasons, do not user your full name or email address</p>
              <div>Your Email: </div><input placeholder='Example: jack@email.com' type='text' required/>
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