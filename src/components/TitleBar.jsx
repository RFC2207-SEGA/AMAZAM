import React from 'react';

class TitleBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
    }
  }
  searchInput(e) {
    this.setState({ "searchQuery": e.target.value })
  }
  render () {
    return (
      <div className="title-bar"> AMAZAM
        <div className="search-bar">
          <input type="text" placeholder="find your fit..." onChange={this.searchInput.bind(this)}></input>
          <button>search</button>
        </div>
      </div>
    )
  }
}

export default TitleBar;