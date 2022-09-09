import React from 'react';
import axios from 'axios';
import {handleInteractions} from '../../utils.js';
import { API_KEY } from '../../../src/config/config.js';
import CloudinaryUploadWidget from '../../../src/components/PhotoUploadWidget.jsx'

class AddReview extends React.Component {
  constructor(props) {
    super(props);

    this.postData = {
      product_id: 0,
      rating: 0,
      summary: '',
      body: '',
      recommend: false,
      name: '',
      email: '',
      photos: [],
      characteristics: {}
    }

    this.charDesc = {
      Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
      Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
      Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
    }

    this.charCountText = '';

    this.state = {
      starRating: 0,
      post: {},
      photoThumbnails: []
    }

    this.toggleStar = this.toggleStar.bind(this)
    this.onChange = this.onChange.bind(this)
    this.getCountText = this.getCountText.bind(this)
    this.characteristicsVote = this.characteristicsVote.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePhotoUploadResponse = this.handlePhotoUploadResponse.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviewMeta !== prevProps.reviewMeta) {
      this.postData.product_id = parseInt(this.props.reviewMeta.product_id)
    }
  }

  toggleStar(e) {
    handleInteractions(e, 'Reviews');
    var starNum;
    if (Number(e.target.attributes.id.value) === this.state.starRating) {
      starNum = 0;
    } else {
      starNum = Number(e.target.attributes.id.value);
    }
    this.postData.rating = starNum
    this.setState({ starRating: starNum })
  }

  getCountText() {
    if (this.postData.body.length < 50) {
      var charsToFifty = 50 - this.postData.body.length;
      this.charCountText = `Minimum required characters left: ${charsToFifty}`;
    } else {
      this.charCountText = 'Minimum reached';
    }
    return this.charCountText;
  }

  onChange(e) {
    // e.preventDefault();
    handleInteractions(e, 'Reviews');
    var key = e.target.attributes.name.value
    var value = e.target.value
    if (key === 'recommend') {
      var boolResponse = Boolean(value);
      this.postData[key] = boolResponse;
    } else if (key === "body") {
      this.postData[key] = value;
      this.setState({});
    } else if (this.charDesc[key]) {
      var charIDstr = JSON.stringify(this.props.reviewMeta.characteristics[key].id)
      var numValue = parseInt(value)
      this.postData.characteristics[charIDstr] = numValue
    } else {
      this.postData[key] = value;
    }
  }

  handlePhotoUploadResponse(photoURLs, thumbnailURLs) {
    this.postData.photos = photoURLs
    this.setState({photoThumbnails: thumbnailURLs})
  }

  characteristicsVote() {
    var resultArr = [];
    if (this.props.reviewMeta.characteristics !== undefined) {
      for (var currentChar in this.props.reviewMeta.characteristics) {
        resultArr.push(<div className='current-char' >{currentChar}</div>)
        for (var i = 0; i < this.charDesc[currentChar].length; i++) {
          resultArr.push(
            <span className='char-radio-container'>
              <input onChange={this.onChange} className='char-ratio-btn' type='radio' id={this.charDesc[currentChar]} name={currentChar} value={i+1}/>
              <label className='char-ratio-label' htmlFor={this.charDesc[currentChar]}> {this.charDesc[currentChar][i]} </label>
            </span>
          )
        }
      }
      return resultArr;
    }
  }

  handleSubmit(e) {
    handleInteractions(e, 'Reviews');
    e.preventDefault();
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews',
      this.postData, {
      headers: {'Authorization': `${API_KEY}`}
    })
    .then((res) => {
      console.log(res)
      this.props.toggleReviewModal()
    })
    .catch(err => console.log(err))
  }


  render() {

    if (this.state.starRating > 0) {
      var ratingOptions = ['Poor', 'Fair', 'Average', 'Good', 'Great']
      var displayStarRatingText = <span className='star-rating-text'>{ratingOptions[this.state.starRating - 1]}</span>
    }

    if (this.postData.photos.length < 5) {
      var displayAddPhotosBtn = <> <CloudinaryUploadWidget handlePhotoUploadResponse={this.handlePhotoUploadResponse}/> </>
    } else {
      var displayAddPhotosBtn = <><br></br><p>Max Number of Photos 📸 Reached</p></>
    }

    if (!this.props.showAddReviewModal) {
      return null;
    } else {
      return (
        <div className="add-review-modal">
          <div className="add-review-modal-content">

            <div className="add-review-modal-header">
              <div>
                <h4 className="add-review-modal-title">Write Your Review</h4>
                <h5 className="add-review-modal-subtitle">About the {this.props.product.name}</h5>
              </div>
              <div className='review-modal-close-btn'><i onClick={()=> this.props.toggleReviewModal()}class="fa-solid fa-x"></i></div>
            </div>

            <div className="add-review-modal-body">
              <form>
                <div className='star-rating-icons-container'>
                  {[1, 2, 3, 4, 5].map((starValue) =>
                    <label className="star-radio-label" key={starValue}>
                      <input type="radio" className="radio-item" value={starValue}/>
                      <i data-testid='toggle-star-rating' id={starValue} onClick={this.toggleStar}
                        className={starValue <= this.state.starRating ? "fa-solid fa-star" : "fa-regular fa-star"}>
                      </i>
                    </label>
                  )}
                  <span>{displayStarRatingText} </span>
                </div>

                <label htmlFor='recommend'>Do you recommend this product?*</label>
                  <input data-testid='recommend-yes' onChange={this.onChange} type='radio' name='recommend' value={true} />Yes
                  <input data-testid='recommend-no' onChange={this.onChange} type='radio' name='recommend' value={false} />No
                <br></br> <br></br>

                <div>
                  {this.characteristicsVote()}
                </div>
                <br></br>

                <label htmlFor='summary'>Summary:</label><br></br>
                  <textarea onChange={this.onChange} className='add-review-textarea' name='summary' id='summary' maxLength='60' rows='2' placeholder='Example: Best purchase ever!' />
                <br></br> <br></br>

                <label htmlFor='body'>Body*:</label><br></br>
                  <textarea onChange={this.onChange} className='add-review-textarea' name='body' id='body' maxLength='1000' rows='3' required='required' placeholder='Why did you like about the product or not?' />
                  <p>{`${this.getCountText()}`}</p>
                <br></br> <br></br>

                <label htmlFor='photos'></label>
                  {displayAddPhotosBtn}<br></br>
                  {this.state.photoThumbnails.map((thumbnailURL, index) => {
                    return <img src={thumbnailURL} key={index} className='review-thumbnail'></img>
                  })}
                <br></br>

                <label htmlFor='name'>Name*: </label>
                  <input className='add-review-input-fld' onChange={this.onChange} type='text' maxLength='60' required='required' name='name' placeholder='Example: jackson11'/>
                  <p>For privacy reasons, do not use your full name or email address</p>
                <br></br> <br></br>

                <label htmlFor='email'>Email*: </label>
                  <input className='add-review-input-fld' onChange={this.onChange} type='email' maxLength='60' rows='10' cols='30' required='required' name='email' placeholder='Example: jackson11@email.com' />
                  <p>For authentication reasons, you will not be emailed</p>
              </form>
            </div>

            <div className="add-review-modal-footer">
              <button onClick={this.handleSubmit} className="ratings-reviews-btn submit-new-review-btn">Submit</button>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default AddReview;

