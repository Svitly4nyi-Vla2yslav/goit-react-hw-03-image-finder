

import React, { Component } from 'react'
import { Searchbar } from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {
 search: '',
  }

  // componentDidMount() {
  //   const yourKey = '38650686-211065fda926dbe73f41f5be1'
  //   axios.get(`https://pixabay.com/api/?q=cat&page=1&key=${yourKey}&image_type=photo&orientation=horizontal&per_page=12`)
  //     .then((response) => response.json())
  // }
  // 

  handleSubmit = value => {
    this.setState({search: value})
  } 
  render() {
    // const {search} = this.state
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar onSubmit={this.handleSubmit}/>
      </div>
    );
  }
};
// API_KEY = '38650686-211065fda926dbe73f41f5be1';