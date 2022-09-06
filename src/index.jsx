const axios = require('axios');
import React from 'react';
import { API_KEY } from './config/config.js';
import { createRoot } from 'react-dom/client';
import Overview from './components/Overview.jsx';
import TitleBar from './components/TitleBar.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';
const root = createRoot(document.getElementById("root"));


class App extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      products: [],
      product: {},
      reviewMeta: {}
    }
  }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/', {
      headers: {'Authorization': `${API_KEY}`},
      params: {
        count: 5,
        page: 1
      }})
    .then(res => {
      this.setState({ products: res.data, product: res.data[0] })
      console.log('Array of Products: ', res.data)
      return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta', {
        headers: {'Authorization': `${API_KEY}`},
        params: {product_id: res.data[0].id}
      })
    })
    .then(res => {
      console.log('meta res:', res.data)
      this.setState({ reviewMeta: res.data })
    })
    .catch(err =>
      console.log(err));
  }

  selectProduct (product) {
    this.setState({ 'product': product })
  }

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
      <div>
        <TitleBar />
        <div className="title-streamer">Site-wide announcement message... SALE / DISCOUNT Offer... new Product Highlight</div>

        <Overview product={this.state.product} select={this.selectProduct.bind(this)} />

        {/* <QA product={this.state.product} select={this.selectProduct.bind(this)}/> */}

        <RatingsReviews product={this.state.product} reviewMeta={this.state.reviewMeta} select={this.selectProduct.bind(this)}/>

      </div>
    )
  }
}


root.render(<App />);