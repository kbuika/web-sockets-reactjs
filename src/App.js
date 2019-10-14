import React, { Component } from 'react';
import './App.css';
// importing the function in api.js that will be used to call to subscribe to timer events
import { subscribeToTimer } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      timestamp: 'no timestamp yet'
     }
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }
  render() { 
    return ( 
      <div className="App">
      <header className="App-header">
        {/* displaying the timer from our port */}
        <p>
         This is the timer value: {this.state.timestamp}
        </p>
        
      </header>
    </div>
     );
  }
}
 
export default App;


