import './App.css';
import  React, { Component } from 'react';

class App extends Component {
  foo = () => "boop";
  // Lifecycle method
  render(){

    const name = "john doe"

      return (
        
        <React.Fragment>
          <h1>HI! OH HAI!! {name.toUpperCase()} { this.foo() }</h1>
        </React.Fragment>
      );
  }
}

export default App;
