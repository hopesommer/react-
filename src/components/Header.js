import React from 'react';
import '../../src/App.css';

class Header extends React.Component{
  render(){
    return (
      <div className="App">
            {/* <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p> */}
        <nav className="header" class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Flickr.svg" className="App-logo"/></a>
          <h1 className="App-title">Flickr Search</h1>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      // <nav className="header" class="navbar navbar-expand-lg navbar-dark bg-primary">
      //   <a class="navbar-brand" href="#"><h1 class="nav-header">React Flickr</h1></a>
      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>
      // </nav>

      // <header className="header">
      //   <h3>React Flickr</h3>
      // </header>
    )
  }
};

export default Header;