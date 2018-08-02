import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Photos from './components/Photos';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
    this.handleGetPhotos = this.handleGetPhotos.bind(this);
  }

  handleGetPhotos(photos) {
    this.setState({'photos': photos});
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchBar _getPhotos={this.handleGetPhotos}/>
          <Photos data={this.state.photos}/>
          <Footer />
        </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

// ReactDOM.render(<App/>, document.getElementById('root'))

export default App;