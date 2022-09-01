import React from 'react';
import axios from 'axios';
import {API_KEY} from '../../config/config.js';

class ComparisonModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showing: false,
      comparedFeatures: [],
      concattedFeatures: [],
    }
  }
  componentDidUpdate() {
    if (this.props.show !== this.state.showing) {
      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${this.props.comparedProduct.id}`,
      {headers: {'Authorization': `${API_KEY}`}, params: { product_id: this.props.comparedProduct.id}})
        .then((data) => {
          var concattedList = this.props.mainInfo.concat(data.data.features)
          for (let i = 0; i < concattedList.length; i++) {
            for (let j = i + 1; j < concattedList.length; j++) {
              if (concattedList[i].feature === concattedList[j].feature) {
                concattedList.splice(j, 1);
              }
            }
          }
          return this.setState({ 'comparedFeatures': data.data.features, 'showing': this.props.show, 'concattedFeatures': concattedList })
        })
    }
  }

  matchFeature (features, target) {
    for (let i = 0; i < features.length; i++ ) {
      if (features[i].feature === target) {
        if (features[i].value === 'true') {
          return 'check!'
        }
        return features[i].value
      }
    }
    return '';
  }

  render() {
    if (this.state.showing) {
      return (
        <div className="compare-modal" onClick={this.props.toggle}>
          <div className="compare-modal-content">
            <table className="compare-modal-table">
              <tbody>
                <tr className="compare-modal-head">
                  <th>{this.props.mainProduct.name}</th>
                  <th></th>
                  <th>{this.props.comparedProduct.name}</th>
                </tr>
                {this.state.concattedFeatures.map((featureVal) => (
                  <tr className="compare-modal-row">
                    <td>{this.matchFeature(this.props.mainInfo, featureVal.feature)}</td>
                    <td>{featureVal.feature}</td>
                    <td>{this.matchFeature(this.state.comparedFeatures, featureVal.feature)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
export default ComparisonModal;