import React, { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';

class App extends Component {

  render() {
    return <DefaultLayout
      content={this.props.children}
    />;
  }
}

export default App;
