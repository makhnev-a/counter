import React from 'react';
import './App.css';
import Counter from "./Counter";
import SetCounter from "./SetCounter";

class App extends React.Component{
  state = {
    countNum: 0,
    maxValue: 5
  };

  onAddNum = () => {
    if (this.state.countNum < this.state.maxValue) {
      this.setState({
        countNum: this.state.countNum + 1
      });
    }
  };

  onClearNum = () => {
    this.setState({
      countNum: 0
    });
  };

  fixMaxValue = (maxVal) => {
    this.setState({
      maxValue: maxVal
    });
  };

  render = () => {
    // console.log(typeof this.state.maxValue)
    return (
        <div className="App">
          <section className="App-header">
            <SetCounter
                className='test'
                maxValue={this.state.maxValue}
                startValue={this.state.countNum}
                fixMaxValue={this.fixMaxValue}
            />
            <Counter
                countNum={this.state.countNum}
                maxValue={+this.state.maxValue}
                onAddNum={this.onAddNum}
                onClearNum={this.onClearNum}
            />
          </section>
        </div>
    );
  };
}

export default App;