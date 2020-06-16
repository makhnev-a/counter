import React from 'react';
import './App.css';
import Counter from "./Counter";
import SetCounter from "./SetCounter";
import {connect} from "react-redux";
import {
    addCountNum,
    changeSetToggle,
    cleanCountNum,
    maxInputValueChange,
    minInputValueChange,
    setDisabled,
    setError,
    setMaxValue,
    setStartValue
} from "./Redux/CounterReducer";

class App extends React.Component {
    onAddNum = () => {
        if (this.props.countNum < this.props.maxValue) {
            this.props.addCountNum();
        }
    };

    render = () => {
        return (
            <div className="App">
                <section className="App-header">
                    <SetCounter
                        className='test'
                        isMaxInputValid={this.props.isMaxInputValid}
                        isMinInputValid={this.props.isMinInputValid}
                        maxInputValueChange={this.props.maxInputValueChange}
                        minInputValueChange={this.props.minInputValueChange}
                        isDisabled={this.props.isDisabled}
                        setDisabled={this.props.setDisabled}
                        maxValue={this.props.maxValue}
                        startValue={this.props.countNum}
                        fixMaxValue={this.props.fixMaxValue}
                        fixStartValue={this.props.fixStartValue}
                        setError={this.props.setError}
                        setCounterToggle={this.props.setCounterToggle}
                    />
                    <Counter
                        isDisabled={this.props.isDisabled}
                        messageError={this.props.error}
                        countNum={this.props.countNum}
                        maxValue={+this.props.maxValue}
                        minValue={this.props.minValue}
                        onAddNum={this.onAddNum}
                        onClearNum={this.props.cleanCountNum}
                        changeSetToggle={this.props.changeSetToggle}
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
        error: state.error,
        isMaxInputValid: state.isMaxInputValid,
        isMinInputValid: state.isMinInputValid
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fixStartValue: (startValue) => {
            dispatch(setStartValue(startValue));
        },
        fixMaxValue: (maxVal) => {
            dispatch(setMaxValue(maxVal));
        },
        addCountNum: () => {
            dispatch(addCountNum());
        },
        cleanCountNum: () => {
            dispatch(cleanCountNum());
        },
        setError: (error) => {
            dispatch(setError(error));
        },
        setDisabled: (isDisabled) => {
            dispatch(setDisabled(isDisabled));
        },
        changeSetToggle: () => {
            dispatch(changeSetToggle());
        },
        maxInputValueChange: (maxInputValue) => {
            dispatch(maxInputValueChange(maxInputValue));
        },
        minInputValueChange: (minInputValue) => {
            dispatch(minInputValueChange(minInputValue));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);