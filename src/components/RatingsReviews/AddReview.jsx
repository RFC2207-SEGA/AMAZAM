import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.checkedStar = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }

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
      body: '',
      post: {}
    }

    this.toggleStar = this.toggleStar.bind(this)
    this.onChange = this.onChange.bind(this)
    this.bodyCharCount = this.bodyCharCount.bind(this)
  }

  toggleStar(e) {
    var starNum = Number(e.target.attributes.id.value)
    if (this.checkedStar[starNum]) {
      for (var currentStar in this.checkedStar) {
        this.checkedStar[currentStar] = false
      }
    } else {
      for (var currentStar in this.checkedStar) {
        if (currentStar <= starNum) {
          this.checkedStar[currentStar] = true
        }
      }
    }
    console.log('checked obj:', this.checkedStar)
    this.postData.rating = starNum
    this.setState({starRating: starNum})
  }

  bodyCharCount() {
    if (this.state.body.length < 50) {
      var charsToFifty = 49 - this.state.body.length
      this.charCountText = `Minimum required characters left: ${charsToFifty}`
    } else {
      this.charCountText = 'Minimum reached'
    }
    return this.charCountText;
  }

  onChange(e) {
    e.preventDefault
    var key = e.target.attributes.name.value
    var value = e.target.value
    this.postData[key] = value;
    console.log('postData:', this.postData)
    if (key === 'body') {
      this.setState ({ body: value })
      this.bodyCharCount() // FIXME to return correct num when black (erased) or
    } else if (key === 'photos') {
      console.log(e)
    }
  }




  render() {
    if (!this.props.addReviewModal) {
      return null;
    } else {
      return (
        <div className="modal">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Write Your Review</h4>
              <h5>About the {this.props.product.name}</h5>
            </div>

            <div className="modal-body">
              <form>
                <div className='star-rating-icons-container'>
                  <label className="star-radio-label" >
                    <input type="radio" className="radio-item" />
                    <i id='1' onClick={this.toggleStar}
                      className={this.checkedStar[1] ? "fa-solid fa-star" : "fa-regular fa-star"}>
                    </i>
                  </label>
                  <label className="star-radio-label" >
                    <input type="radio" className="radio-item" />
                    <i id='2' onClick={this.toggleStar}
                      className={this.checkedStar[2] ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                  </label>
                  <label className="star-radio-label" >
                    <input type="radio" className="radio-item" />
                    <i id='3' onClick={this.toggleStar}
                      className={this.checkedStar[3] ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                  </label>
                  <label className="star-radio-label" >
                    <input type="radio" className="radio-item" />
                    <i id='4' onClick={this.toggleStar}
                      className={this.checkedStar[4] ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                  </label>
                  <label className="star-radio-label" >
                    <input type="radio" className="radio-item" />
                    <i id='5' onClick={this.toggleStar}
                      className={this.checkedStar[5] ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                  </label>
                </div>

                <label forHtml='recommed'>Do you recommend this product?</label>
                  <input onChange={this.onChange} type='radio' name='recommend' value='true' />Yes
                  <input onChange={this.onChange} type='radio' name='recommend' value='false' />No
                <br></br> <br></br> <br></br>

                <h1>Characteristics</h1>
                <label forHtml='characteristics'>Size:</label>
                  <input onChange={this.onChange} type='radio' name='Size' value='1' />A size too small
                  <input onChange={this.onChange} type='radio' name='Size' value='2' />½ a size too small
                  <input onChange={this.onChange} type='radio' name='Size' value='3' />Perfect
                  <input onChange={this.onChange} type='radio' name='Size' value='4' />½ a size too big
                  <input onChange={this.onChange} type='radio' name='Size' value='5' />A size too wide
                <br></br> <br></br> <br></br>

                <label forHtml='summary'>Summary:</label>
                  <textarea onChange={this.onChange} name='summary' maxLength='60' rows='3' cols='30' placeholder='Example: Best purchase ever!' />
                <br></br> <br></br> <br></br>

                <label forHtml='body'>Body </label>
                <textarea onChange={this.onChange} name='body' maxLength='1000' rows='5' cols='30' required='required' placeholder='Why did you like the product or not?' />
                <p>{`${this.charCountText}`}</p>
                <br></br> <br></br> <br></br>

                <label forHtml='photos'>Upload Photos </label><br></br><br></br>
                  <input onChange={this.onChange} type='file' accept='.jpg, .jpeg, .png, .svg, .gif' name='pictures[]' multiple/>


              </form>
            </div>

            <div className="modal-footer">
              <button onClick={this.props.toggleReviewModal} className="button">Submit</button>
            </div>
        </div>
      </div>
      )
    }
  }
}
export default AddReview;

