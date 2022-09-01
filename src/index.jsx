const axios = require('axios');
import {API_KEY} from './config/config.js';
// Bring React in to build a component.
import React from "react";
// Import from react-dom the ability to create a root render
import { createRoot } from "react-dom/client";
import QList from './components/Q&A/QList.jsx';
// create the root of the app by selection where the app should be mounted in the dom
import Overview from "./components/Overview.jsx"
import TitleBar from "./components/TitleBar.jsx"
const root = createRoot(document.getElementById("root"));




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},

    }
  }

  selectProduct(product) {
    this.setState({ 'product': product });
    // TODO: implement product selection function
  }

  componentDidMount() {
    //GET request for a list of products and their IDs
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/',
      {headers: {'Authorization': `${API_KEY}`},
      params: {count: 5, page: 1}})
        .then((res) => {
        this.setState({ 'products': res.data, 'product': res.data[0] })})
        .catch((err) => console.log(err));
    //GET request for Q&A at a product_id
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions',
      {headers: {'Authorization': `${API_KEY}`},
      params: {count: 5, page: 1, product_id: 66673 }})
        .then((res) => console.log('Q&A at product_id: ', res.data))
        .catch((err) => console.log(err));
    //GET request for reviews at product ID
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews',
      {headers: {'Authorization': `${API_KEY}`},
      params: {count: 5, page: 1, product_id: 66673, sort: 'newest' }})
        .then((res) => console.log('Reviews at product_id: ', res.data))
        .catch((err) => console.log(err));
    //GET request for Cart (Currently empty but can be filled with POST request)
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/cart',
      {headers: {'Authorization': `${API_KEY}`}})
        .then((res) => console.log('Cart Data: ', res.data))
        .catch((err) => console.log(err));
      //Example POST request for adding interactions to the DB
      // axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/interactions',{element: 'Selector for the clicked element', widget: 'Name of widget in which click occured', time: 'Time the click occured'},
      // {headers: {'Authorization': `${API_KEY}`}})
      //   .then((res) => console.log(res.data))
      //   .catch((err) => console.log(err));

  }

  render () {
    return (

      <div>

        <TitleBar />
        <div className="title-streamer">Site-wide announcement message... SALE / DISCOUNT Offer... new Product Highlight</div>
        <div>
        <Overview product={this.state.product} select={this.selectProduct.bind(this)} />
        {/* <Related product={this.state.product} select={this.selectProduct.bind(this)} /> */}
        {/* <Reviews product={this.state.product} select={this.selectProduct.bind(this)}/>
        */<QList product={this.state.product} select={this.selectProduct.bind(this)} />/*
        <Related products={this.state.products} product={this.state.product} select={this.selectProduct.bind(this)}/> */}
        </div>
      </div>
    )
  }
}

// render the root element with the provided component
root.render(<App />);