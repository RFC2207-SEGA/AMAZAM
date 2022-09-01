import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
              <h5>About the </h5>
            </div>
            <div className="modal-body">
              <div>
                <h3>Write your Review</h3>
                <h5>About the (insert product)</h5>
                <form>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label for="star5">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label for="star4">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label for="star3">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label for="star2">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label for="star1">1 star</label>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Do you recommend this product?</td>
                        <td>
                          <input type='radio' value='Yes' />Yes
                          <input type='radio' value='No' />No
                        </td>
                      </tr>

                      <tr>
                        <td>Characteristics</td>
                        <td>
                          Placeholder
                        </td>
                      </tr>

                      <tr>
                        <td>Review Summary</td>
                        <td>
                          <textarea maxLength='60' rows='3' cols='30' placeholder='Example: Best purchase ever!' />
                        </td>
                      </tr>

                      <tr>
                        <td>Review Body</td>
                        <td>
                          <textarea maxLength='1000' rows='5' cols='30' required='required' placeholder='Why did you like the product or not?' />
                          <p>char count:</p>
                        </td>
                      </tr>

                      <tr>
                        <td>Upload Photos</td>
                        <td>
                          <input type='file' accept='.jpg, .jpeg, .png, .svg, .gif' multiple />
                        </td>
                      </tr>

                      <tr>
                        <td>Nickname</td>
                        <td>
                          <input type='text' placeholder='Example: jackson11' required='required' />
                          <p>For privacy reasons, do not use your full name or email address</p>
                        </td>
                      </tr>

                      <tr>
                        <td>Email</td>
                        <td>
                          <input type='text' maxLength='60' rows='10' cols='30' required='required' placeholder='Example: jackson11@email.com' />
                          <p>For authentication reasons, you will not be emailed</p>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </form>
              </div>



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




  // Size: 223601
  // Fit: 223681
  // Length: 223682
  // Comfort: 223683
  // Quality: 223684

  // characteristics: {
  //   Size: 0,
  //   Width: 0,
  //   Comfort: 0,
  //   Quality: 0,
  //   Length: 0,
  //   Fit: 0
  // },