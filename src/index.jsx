const axios = require('axios');
import QList from './components/Q&A/qList.jsx';
import Overview from "./components/Overview/Overview.jsx"
import TitleBar from "./components/TitleBar.jsx"
import React from 'react';
import { createRoot } from 'react-dom/client';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';
const root = createRoot(document.getElementById("root"));

const { API_KEY } = process.env

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      products: [
        {
          "id": 66642,
          "campus": "hr-rfc",
          "name": "Camo Onesie",
          "slogan": "Blend in to your crowd",
          "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
          "category": "Jackets",
          "default_price": "140.00",
          "created_at": "2022-03-31T21:13:15.875Z",
          "updated_at": "2022-03-31T21:13:15.875Z"
        },
        {
          "id": 66643,
          "campus": "hr-rfc",
          "name": "Bright Future Sunglasses",
          "slogan": "You've got to wear shades",
          "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
          "category": "Accessories",
          "default_price": "69.00",
          "created_at": "2022-03-31T21:13:15.875Z",
          "updated_at": "2022-03-31T21:13:15.875Z"
        },
        {
          "id": 66644,
          "campus": "hr-rfc",
          "name": "Morning Joggers",
          "slogan": "Make yourself a morning person",
          "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
          "category": "Pants",
          "default_price": "40.00",
          "created_at": "2022-03-31T21:13:15.875Z",
          "updated_at": "2022-03-31T21:13:15.875Z"
        },
        {
          "id": 66645,
          "campus": "hr-rfc",
          "name": "Slacker's Slacks",
          "slogan": "Comfortable for everything, or nothing",
          "description": "I'll tell you how great they are after I nap for a bit.",
          "category": "Pants",
          "default_price": "65.00",
          "created_at": "2022-03-31T21:13:15.875Z",
          "updated_at": "2022-03-31T21:13:15.875Z"
        },
        {
          "id": 66646,
          "campus": "hr-rfc",
          "name": "Heir Force Ones",
          "slogan": "A sneaker dynasty",
          "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
          "category": "Kicks",
          "default_price": "99.00",
          "created_at": "2022-03-31T21:13:15.875Z",
          "updated_at": "2022-03-31T21:13:15.875Z"
        }
      ],
      product: {
        "id": 66644,
        "campus": "hr-rfc",
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": "40.00",
        "created_at": "2022-03-31T21:13:15.875Z",
        "updated_at": "2022-03-31T21:13:15.875Z"
      },
      reviewMeta: {
        "product_id": "66644",
        "ratings": {
          "1": "3",
          "2": "3",
          "3": "10",
          "4": "6",
          "5": "17"
        },
        "recommended": {
          "false": "3",
          "true": "36"
        },
        "characteristics": {
          "Fit": {
            "id": 223577,
            "value": "2.3750000000000000"
          },
          "Length": {
            "id": 223578,
            "value": "3.1904761904761905"
          },
          "Comfort": {
            "id": 223579,
            "value": "3.0400000000000000"
          },
          "Quality": {
            "id": 223580,
            "value": "3.3809523809523810"
          }
        }
      }
    }
  }

  // componentDidMount() {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/', {
  //     headers: {'Authorization': `${API_KEY}`},
  //     params: {
  //       count: 5,
  //       page: 1
  //     }})
  //   .then(res => {
  //     this.setState({ products: res.data, product: res.data[2] })
  //     // FIXME - Remove console log after testing complete
  //     console.log('Products:', res.data)
  //     console.log('Single Product:', res.data[2])
  //     return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta', {
  //       headers: {'Authorization': `${API_KEY}`},
  //       params: {product_id: res.data[2].id}
  //     })
  //   })
  //   .then(res => {
  //     this.setState({ reviewMeta: res.data })
  //     // FIXME - Remove console log after testing complete
  //     console.log('Review Meta:', res.data)
  //   })
  //   .catch(err =>
  //     console.log(err));
  // }



  selectProduct(product) {
    this.setState({ 'product': product })
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta', {
      headers: { 'Authorization': `${API_KEY}` },
      params: { product_id: product.id }
    })
      .then(res => {
        this.setState({ reviewMeta: res.data })
      })
      .catch(err =>
        console.log(err));
  }

  executeScroll() {
    this.myRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (

      <div>

        <TitleBar />
        <div className="title-streamer">Site-wide announcement message... SALE / DISCOUNT Offer... new Product Highlight</div>
        <Overview product={this.state.product} select={this.selectProduct.bind(this)} meta={this.state.reviewMeta} scroll={this.executeScroll.bind(this)} />

        {/* <QList product={this.state.product} select={this.selectProduct.bind(this)} />
        <div ref={this.myRef}></div> */}
        <RatingsReviews product={this.state.product} reviewMeta={this.state.reviewMeta} select={this.selectProduct.bind(this)} />
      </div>
    )
  }
}


root.render(<App />);