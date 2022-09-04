import React from 'react';
import axios from 'axios';
import { API_KEY } from  '../../../src/config/config.js';

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
      photos: []
    }

    this.toggleStar = this.toggleStar.bind(this)
    this.onChange = this.onChange.bind(this)
    this.getCountText = this.getCountText.bind(this)
    this.handlePhotosUpload = this.handlePhotosUpload.bind(this)
    this.characteristicsVote = this.characteristicsVote.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviewMeta !== prevProps.reviewMeta) {
      this.postData.product_id = parseInt(this.props.reviewMeta.product_id)
    }
  }

  toggleStar(e) {
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
    var key = e.target.attributes.name.value
    var value = e.target.value
    if (key === 'recommend') {
      var booleanAns = Boolean(value);
      this.postData[key] = booleanAns;
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

  handlePhotosUpload(e) {
    if ((this.state.photos.length + e.target.files.length) <= 5) {
      for (var i = 0; i < e.target.files.length; i++) {
        this.postData.photos.push(URL.createObjectURL(e.target.files[i]));
        console.log('photos array:', this.postData.photos)
      }
      this.setState({ photos: this.postData.photos });
    } else {
      alert('Please limit the number of photos 📸 to five.')
    }
  }

  characteristicsVote() {
    var resultArr = [];
    if (this.props.reviewMeta.characteristics !== undefined) {
      for (var currentChar in this.props.reviewMeta.characteristics) {
        resultArr.push(<div className='current-char'>{currentChar}</div>)
        for (var i = 0; i < this.charDesc[currentChar].length; i++) {
          resultArr.push(
            <span className='char-radio-container'>
              <input onChange={this.onChange} className='char-ratio-btn' type='radio' id={this.charDesc[currentChar]} name={currentChar} value={i+1} />
              <label className='char-ratio-label' htmlFor={this.charDesc[currentChar]}> {this.charDesc[currentChar][i]} </label>
            </span>
          )
        }
      }
      return resultArr;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    for (var key in this.postData) {
      console.log('key:', key, 'key type:', typeof key, 'value:', this.postData[key], 'value type:', typeof this.postData[key])
    }
    console.log('on submit post data:', this.postData)
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews',
      this.postData, {
      headers: {
        'Authorization': `${API_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };


  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log('on submit post data:', this.postData)
  //   return axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
  //     product_id: this.postData.product_id,
  //     rating: this.postData.rating,
  //     summary: this.postData.summary,
  //     body: this.postData.body,
  //     recommend: this.postData.recommend,
  //     name: this.postData.name,
  //     email: this.postData.email,
  //     photos: this.postData.photos,
  //     characteristics: this.postData.characteristics
  //   },
  //   {
  //     headers: {
  //       'Authorization': `${API_KEY}`,
  //       'Content-Type': 'application/json'}
  //   })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // };

  render() {

    if (this.state.starRating > 0) {
      var ratingOptions = ['Poor', 'Fair', 'Average', 'Good', 'Great']
      var displayStarRatingText = <span className='star-rating-text'>{ratingOptions[this.state.starRating - 1]}</span>
    }


    if (this.state.photos.length < 5) {
      var displayAddPhotosBtn = <><input className='upload-photos-btn' onChange={this.handlePhotosUpload} type='file' accept='.jpg, .jpeg, .png, .svg, .gif' multiple /><br></br></>
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
              <h4 className="add-review-modal-title">Write Your Review</h4>
              <h5 className="add-review-modal-subtitle">About the {this.props.product.name}</h5>
            </div>

            <div className="add-review-modal-body">
              <form>
                <div className='star-rating-icons-container'>
                  {[1, 2, 3, 4, 5].map((starValue) =>
                    <label className="star-radio-label" key={starValue}>
                      <input type="radio" className="radio-item" />
                      <i id={starValue} onClick={this.toggleStar}
                        className={starValue <= this.state.starRating ? "fa-solid fa-star" : "fa-regular fa-star"}>
                      </i>
                    </label>
                  )}
                  <span>{displayStarRatingText} </span>
                </div>

                <label htmlFor='recommend'>Do you recommend this product?*</label>
                  <input onChange={this.onChange} type='radio' name='recommend' value={true} />Yes
                  <input onChange={this.onChange} type='radio' name='recommend' value={false} />No
                <br></br> <br></br>

                {/* <label htmlFor='characteristics'>Product characteristics</label><br></br> */}
                <div>
                  {this.characteristicsVote()}
                </div>
                <br></br>

                <label htmlFor='summary'>Summary:</label><br></br>
                  <textarea onChange={this.onChange} className='add-review-textarea' name='summary' maxLength='60' rows='2' placeholder='Example: Best purchase ever!' />
                <br></br> <br></br>

                <label htmlFor='body'>Body*:</label><br></br>
                  <textarea onChange={this.onChange} className='add-review-textarea' name='body' maxLength='1000' rows='3' required='required' placeholder='Why did you like about the product or not?' />
                  <p>{`${this.getCountText()}`}</p>
                <br></br> <br></br>

                <label htmlFor='photos'>Upload Photos</label><br></br>
                  {displayAddPhotosBtn}
                  {this.state.photos.map((photoURL, index) => {
                    return <img src={photoURL} key={index} className='review-thumbnail'></img>
                  })}
                <br></br> <br></br>

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
              <button onClick={this.handleSubmit} className="button">Submit</button>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default AddReview;

