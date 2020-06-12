import React from 'react';
import './App.css';
import Counter from "./Counter";
import SetCounter from "./SetCounter";
import {connect} from "react-redux";
import {addCountNum, cleanCountNum, setMaxValue, setStartValue} from "./Redux/CounterReducer";

class App extends React.Component {
    constructor(props) {
      super(props);

      // const counterData = JSON.parse(localStorage.getItem('counter') || '{}');

      let state = {
          countNum: 0,
          maxValue: 5,
          minValue: 0,
          error: null,
          isDisabled: false,
          setCounterToggle: false
      };

      // if (Object.keys(counterData).length) {
      //     state = counterData;
      // }

      this.state = state;
    }

    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem('counter', stateAsString)
    // };

    onAddNum = () => {
        if (this.props.countNum < this.props.maxValue) {
            // this.setState({
            //     countNum: this.state.countNum + 1
            // });

            this.props.addCountNum();
        }
    };

    onClearNum = () => {
        // this.setState({
        //     countNum: this.state.minValue
        // });

        this.props.cleanCountNum();
    };

    setError = (error) => {
        this.setState({error});
    };

    setDisabled = (isDisabled) => this.setState({isDisabled});

    // fixMaxValue = (maxVal) => {
    //     this.setState({
    //         maxValue: maxVal
    //     });
    // };
    //
    // fixStartValue = (startValue) => {
    //     this.setState({
    //         countNum: startValue,
    //         minValue: startValue
    //     });
    // };

    changeSetToggle = () => {
        this.setState({
            setCounterToggle: !this.state.setCounterToggle
        });
    };

    render = () => {
        return (
            <div className="App">
                <section className="App-header">
                    <SetCounter
                        className='test'
                        isDisabled={this.state.isDisabled}
                        setDisabled={this.setDisabled}
                        maxValue={this.state.maxValue}
                        startValue={this.state.countNum}
                        fixMaxValue={this.props.fixMaxValue}
                        fixStartValue={this.props.fixStartValue}
                        // fixStartValue={this.fixStartValue}
                        setError={this.setError}
                        setCounterToggle={this.state.setCounterToggle}
                        // saveState={this.saveState}
                    />
                    <Counter
                        isDisabled={this.props.isDisabled}
                        messageError={this.props.error}
                        countNum={this.props.countNum}
                        maxValue={+this.props.maxValue}
                        minValue={this.props.minValue}
                        onAddNum={this.onAddNum}
                        onClearNum={this.onClearNum}
                        changeSetToggle={this.changeSetToggle}
                    />
                </section>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isDisabled: state.isDisabled,
        maxValue: state.maxValue,
        minValue: state.minValue,
        countNum: state.countNum,
        setCounterToggle: state.setCounterToggle,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fixStartValue: (startValue) => {
            return dispatch(setStartValue(startValue));
        },
        fixMaxValue: (maxVal) => {
            return dispatch(setMaxValue(maxVal));
        },
        addCountNum: () => {
            return dispatch(addCountNum());
        },
        cleanCountNum: () => {
            return dispatch(cleanCountNum())
        }
    };
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);