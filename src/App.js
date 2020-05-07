import React, { Component } from 'react';

class App extends Component {
  checkLength = (receiveTitle) => {
    let title = receiveTitle;
    if (title.length > 0) {
      title += ' > 0';
    } else if (title.length === 0) {
      title += ' === 0';
    } else {
      title += ' < 0';
    }
    return title;
  };

  render() {
    const title = 'Hello World';
    return (
      <div>
        <h1>{this.checkLength(title)}</h1>
      </div>
    );
  }
}

export default App;
