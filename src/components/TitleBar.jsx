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
      <div data-testid="title-bar" className="title-bar"> AMAZAM
        <div className="search-bar">
          <input type="text" placeholder="find your fit..." onChange={this.searchInput.bind(this)}></input>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    )
  }
}

export default TitleBar;