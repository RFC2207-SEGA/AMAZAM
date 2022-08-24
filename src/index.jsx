// Bring React in to build a component.
import React from "react";
// Import from react-dom the ability to create a root render
import { createRoot } from "react-dom/client";
// create the root of the app by selection where the app should be mounted in the dom
import Overview from "./components/Overview.jsx"
const root = createRoot(document.getElementById("root"));


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
    }
  }

  selectProduct (product) {
    this.setState({ 'product': product })
    //TODO: implement product selection function
  }

  render () {
    return (
      <div>
        <div>
        <Overview product={this.state.product} select={this.selectProduct.bind(this)} />
        {/* <Reviews product={this.state.product} select={this.selectProduct.bind(this)}/>
        <QA product={this.state.product} select={this.selectProduct.bind(this)}/>
        <Related products={this.state.products} product={this.state.product} select={this.selectProduct.bind(this)}/> */}
        </div>
      </div>
    )
  }
}

// render the root element with the provided component
root.render(<App />);