import React, { Component } from 'react';

class App extends Component {
  state = {
    data: []
  };

  // Code is invoked after the component is mounted
  componentDidMount() {
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=pavement%20%28band%29&format=json&origin=*";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
      });
  }

  render() {
    const { data } = this.state;

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });

    return <ul>{result}</ul>;
  }
}

export default App;
