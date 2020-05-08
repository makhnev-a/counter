import React from 'react';
import './App.css';
import Counter from "./Counter";
import SetCounter from "./SetCounter";

class App extends React.Component{
  state = {
    countNum: 0,
    maxValue: 5,
    minValue: 0,
    error: null
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
      countNum: this.state.minValue
    });
  };

  setError = (error) => {
    this.setState({error});
  };

  fixMaxValue = (maxVal) => {
    this.setState({
      maxValue: maxVal
    });
  };

  fixStartValue = (startValue) => {
    this.setState({
      countNum: startValue,
      minValue: startValue
    });
  };

  render = () => {
    return (
        <div className="App">
          <section className="App-header">
            <SetCounter
                className='test'
                maxValue={this.state.maxValue}
                startValue={this.state.countNum}
                fixMaxValue={this.fixMaxValue}
                fixStartValue={this.fixStartValue}
                setError={this.setError}
            />
            <Counter
                messageError={this.state.error}
                countNum={this.state.countNum}
                maxValue={+this.state.maxValue}
                minValue={this.state.minValue}
                onAddNum={this.onAddNum}
                onClearNum={this.onClearNum}
            />
          </section>
        </div>
    );
  };
}

export default App;