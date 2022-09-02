import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);

    this.postData = {
      rating: 0,
      recommend: false,
      characteristics: {
      },
      summary: '',
      body: '',
      photos: [],
      name: '',
      email: ''
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
  }

  toggleStar(e) {
    var starNum;
    if (Number(e.target.attributes.id.value) === this.state.starRating) {
      starNum = 0;
    } else {
      starNum = Number(e.target.attributes.id.value);
    }
    this.postData.rating = starNum
    this.setState({starRating: starNum})
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
    e.preventDefault();
    var key = e.target.attributes.name.value
    var value = e.target.value
    this.postData[key] = value;
    console.log('postData:', this.postData)
    if(key === "body") {
      this.setState({}); // this allows the charCountText from above to re-render everytime there is a change to the body input
    }
  }

  handlePhotosUpload(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.postData.photos.push(URL.createObjectURL(e.target.files[i]));
    }
    this.setState({ photos: this.postData.photos});
  }


  render() {
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
                  {[1,2,3,4,5].map((starValue) =>
                    <label className="star-radio-label" key={starValue}>
                      <input type="radio" className="radio-item" />
                      <i id={starValue} onClick={this.toggleStar}
                        className={starValue <= this.state.starRating ? "fa-solid fa-star" : "fa-regular fa-star"}>
                      </i>
                    </label>
                  )}
                </div>

                <label htmlFor='recommed'>Do you recommend this product?*</label>
                  <input onChange={this.onChange} type='radio' name='recommend' value='true' />Yes
                  <input onChange={this.onChange} type='radio' name='recommend' value='false' />No
                <br></br> <br></br> <br></br>

                <h1>Characteristics* PLACEHOLDER - IGNORE FOR NOW </h1>
                <label htmlFor='characteristics'>Size:</label>
                  <input onChange={this.onChange} type='radio' name='Size' value='1' />A size too small
                  <input onChange={this.onChange} type='radio' name='Size' value='2' />½ a size too small
                  <input onChange={this.onChange} type='radio' name='Size' value='3' />Perfect
                  <input onChange={this.onChange} type='radio' name='Size' value='4' />½ a size too big
                  <input onChange={this.onChange} type='radio' name='Size' value='5' />A size too wide
                <br></br> <br></br> <br></br>

                <label htmlFor='summary'>Summary:</label>
                  <textarea onChange={this.onChange} name='summary' maxLength='60' rows='3' cols='30' placeholder='Example: Best purchase ever!' />
                <br></br> <br></br> <br></br>

                <label htmlFor='body'>Body*:</label>
                <textarea onChange={this.onChange} name='body' maxLength='1000' rows='5' cols='30' required='required' placeholder='Why did you like the product or not?' />
                <p>{`${this.getCountText()}`}</p>
                <br></br> <br></br> <br></br>

                <label htmlFor='photos'>Upload Photos </label><br></br><br></br>
                  <input onChange={this.handlePhotosUpload} type='file' accept='.jpg, .jpeg, .png, .svg, .gif' multiple />
                  {this.state.photos.map((photoURL, index) => {
                    return <img src={photoURL} key={index} className='review-thumbnail'></img>
                  })}
                <br></br> <br></br> <br></br>

                <label htmlFor='name'>Name*: </label>
                  <input type='text' maxLength='60' placeholder='Example: jackson11' required='required' />
                  <p>For privacy reasons, do not use your full name or email address</p>
                <br></br> <br></br> <br></br>

                <label htmlFor='name'>Email*: </label>
                  <input type='email' maxLength='60' rows='10' cols='30' required='required' placeholder='Example: jackson11@email.com' />
                  <p>For authentication reasons, you will not be emailed</p>
                <br></br>
              </form>
            </div>

            <div className="add-review-modal-footer">
              <button onClick={this.props.toggleReviewModal} className="button">Submit</button>
            </div>
        </div>
      </div>
      )
    }
  }
}
export default AddReview;

