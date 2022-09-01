const axios = require('axios');
import {API_KEY} from './config/config.js';
// Bring React in to build a component.
import React from "react";
// Import from react-dom the ability to create a root render
import { createRoot } from "react-dom/client";
// create the root of the app by selection where the app should be mounted in the dom
import Overview from "./components/Overview.jsx"
import TitleBar from "./components/TitleBar.jsx"
const root = createRoot(document.getElementById("root"));
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';





class App extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      products: [
        {
              "id": 1,
              "name": "Camo Onesie",
              "slogan": "Blend in to your crowd",
              "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
              "category": "Jackets",
              "default_price": "140"
          },
        {
              "id": 2,
              "name": "Bright Future Sunglasses",
              "slogan": "You've got to wear shades",
              "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
              "category": "Accessories",
              "default_price": "69"
          },
        {
              "id": 3,
              "name": "Morning Joggers",
              "slogan": "Make yourself a morning person",
              "description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
              "category": "Pants",
              "default_price": "40"
          }
      ],

      product: {
        "id": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140"
      },
      meta: {}
    }
  }


  selectProduct (product) {
    this.setState({ 'product': product })
    //TODO: implement product selection function
  }

  componentDidMount() {
    //GET request for a list of products and their IDs
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/',{
      headers: {'Authorization': `${API_KEY}`},
      params: {
        count: 5,
        page: 1
      }})
    .then(res => {
      this.setState({ products: res.data })
      console.log('Array of Products: ', res.data)
      return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta', {
        headers: {'Authorization': `${API_KEY}`},
        params: {product_id: 66642}
      })
    })
    .then(res => {
      this.setState({ meta: res.data })
      console.log('meta from server:', res.data)
    })
    .catch(err =>
      console.log(err));
  }

    // //GET request for Q&A at a product_id
    // axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions',
    //   {headers: {'Authorization': `${API_KEY}`},
    //   params: {count: 5, page: 1, product_id: 66673 }})
    //     .then((res) => console.log('Q&A at product_id: ', res.data))
    //     .catch((err) => console.log(err));
    //GET request for reviews at product ID
    // axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
    //     headers: {'Authorization': `${API_KEY}`},
    //     params: {count: 5, page: 1, product_id: 66673, sort: 'newest' }})
    //   .then((res) => console.log('Reviews at product_id: ', res.data))
    //   .catch((err) => console.log(err));
    //GET request for Cart (Currently empty but can be filled with POST request)
    // axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/cart',
    //   {headers: {'Authorization': `${API_KEY}`}})
    //     .then((res) => console.log('Cart Data: ', res.data))
    //     .catch((err) => console.log(err));
      //Example POST request for adding interactions to the DB
      // axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/interactions',{element: 'Selector for the clicked element', widget: 'Name of widget in which click occured', time: 'Time the click occured'},
      // {headers: {'Authorization': `${API_KEY}`}})
      //   .then((res) => console.log(res.data))
      //   .catch((err) => console.log(err));


  render () {
    return (
      // <div>
      //   <Overview product={this.state.product} select={this.selectProduct.bind(this)}/>
      // </div>
      <div>
        <TitleBar />
        <div className="title-streamer">Site-wide announcement message... SALE / DISCOUNT Offer... new Product Highlight</div>
        <div>
        {/* <Overview product={this.state.product} select={this.selectProduct.bind(this)} /> */}

        {/* <QA product={this.state.product} select={this.selectProduct.bind(this)}/>
        <Related products={this.state.products} product={this.state.product} select={this.selectProduct.bind(this)}/> */}
        </div>

        <RatingsReviews product={this.state.product} meta={this.state.meta} select={this.selectProduct.bind(this)}/>

      </div>
      // <div>
      //   <QA product={this.state.product} select={this.selectProduct.bind(this)}/>
      // </div>
      // <div>
      //   <Related products={this.state.products} product={this.state.product} select={this.selectProduct.bind(this)}/>
      // </div>
    )
  }
}

// render the root element with the provided component
root.render(<App />);