import React from 'react'
import axios from 'axios'
import { createRoot } from 'react-dom/client'
import QList from './components/Q&A/qList.jsx'
import Overview from "./components/Overview/Overview.jsx"
import TitleBar from "./components/TitleBar.jsx"
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx'

const root = createRoot(document.getElementById("root"))
const { API_KEY } = process.env

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      products: [],
      product: {},
      reviewMeta: {},
    }
  }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/', {
      headers: { 'Authorization': `${API_KEY}` },
      params: {
        count: 5,
        page: 1,
      }
    })
      .then(res => {
        this.setState({ products: res.data, product: res.data[2] })
        return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta', {
          headers: { 'Authorization': `${API_KEY}` },
          params: { product_id: res.data[2].id }
        })
      })
      .then(res => {
        this.setState({ reviewMeta: res.data })
      })
      .catch(err =>
        console.log(err))
  }

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
        console.log(err))
  }

  executeScroll() {
    this.myRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (

      <div>

        <TitleBar />
        <div className="title-streamer">
          NEW HERE? Get 15% off everything!* With code: NEWBIE
        </div>

        <Overview product={this.state.product} select={this.selectProduct.bind(this)} meta={this.state.reviewMeta} scroll={this.executeScroll.bind(this)} />

        <QList product={this.state.product} select={this.selectProduct.bind(this)} />

        <div ref={this.myRef}></div>
        <RatingsReviews product={this.state.product} reviewMeta={this.state.reviewMeta} select={this.selectProduct.bind(this)} />
      </div>
    )
  }
}

root.render(<App />)
