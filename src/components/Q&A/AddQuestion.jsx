import React from "react";
import ReactDOM from "react-dom";
import { API_KEY } from "../../config/config.js";
import {handleInteractions} from '../../utils.js';
const axios = require("axios");

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qBody: "",
      qName: "",
      qEmail: "",
    };

    this.questionPost = this.questionPost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  questionPost(e) {
    e.preventDefault();
    handleInteractions(e, 'Q&A');
    console.log(
      this.state.qBody,
      this.state.qName,
      this.state.qEmail,
      this.props.currentProductID
    );
    var tempID = parseInt(this.props.currentProductID);
    console.log(tempID);
    axios
      .post(
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions",
        {
          body: this.state.qBody,
          name: this.state.qName,
          email: this.state.qEmail,
          product_id: tempID,
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
    this.questionPost(e);
    this.props.onClose(e);
  }

  render() {
    if (!this.props.show) {
      return null;
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
            <h4 className="qa-modal-title">Ask Your Question </h4>
            <h5 className="qa-modal-subtitle">
              About Product {this.props.currentProduct}
            </h5>
          </div>
          <div className="qa-modal-body">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div id='q-question'>
                Your Question: <br></br>
              <textarea
                type="text"
                maxlength='1000'
                cols='40'
                rows='10'
                onChange={(e) => this.setState({ qBody: e.target.value })}
                required
              />
              </div>
              <div id='q-nickname'>
                Nickname: <br></br>
              <input
                type="text"
                maxlength='60'
                placeholder="Example: jackson11!"
                onChange={(e) => this.setState({ qName: e.target.value })}
                required
              />
              </div>
              <div id='q-email'>
                Your Email: <br></br>
              <input
                type="text"
                maxlength='60'
                onChange={(e) => this.setState({ qEmail: e.target.value })}
                required
              />
              </div>
              <p>For authentication reasons, you will not be emailed</p>
              <div className="qa-modal-footer">
                <button className="qa-modal-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestion;
