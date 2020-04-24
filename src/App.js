import React from 'react';
import './App.css';
import Counter from "./Counter";

class App extends React.Component{
  state = {
    countNum: 0
  };

  onAddNum = () => {
    this.setState({
      countNum: this.state.countNum + 1
    });
  };

  onClearNum = () => {
    this.setState({
      countNum: 0
    });
  };

  render = () => {
    return (
        <div className="App">
          <section className="App-header">
            <Counter
                countNum={this.state.countNum}
                onAddNum={this.onAddNum}
                onClearNum={this.onClearNum}
            />
          </section>
        </div>
    );
  };
}

export default App;
