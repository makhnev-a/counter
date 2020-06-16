import React from "react";
import Button from "./Button";

class SetCounter extends React.Component {
    state = {
        maxValue: this.props.maxValue,
        startValue: this.props.startValue
    };

    checkValid = (startValue, maxValue) => {
        if (this.props.maxValue === this.props.startValue) {
            this.props.setError('incorrect value!');

            this.props.maxInputValueChange(false);
            this.props.minInputValueChange(false);
            this.props.setDisabled(true);
        } else if (this.props.maxValue < this.props.startValue) {
            this.props.setError('incorrect value!');

            this.props.maxInputValueChange(false);
            this.props.minInputValueChange(true);
            this.props.setDisabled(true);
        } else if (this.props.startValue < 0) {
            this.props.setError('incorrect value!');

            this.props.minInputValueChange(false);
            this.props.setDisabled(true);
        } else {
            this.props.maxInputValueChange(true);
            this.props.minInputValueChange(true);
            this.props.setDisabled(false);
            this.props.setError(null);
            this.props.fixStartValue('click set btn');
        }
    };

    onMaxValueChange = (event) => {
        let maxValue = +event.currentTarget.value;
        this.setState({maxValue}, () => {
            this.checkValid(this.state.startValue, maxValue);
        });
    };

    onStartValueChange = (event) => {
        let startValue = +event.currentTarget.value;
        this.setState({startValue}, () => {
            this.checkValid(startValue, this.state.maxValue);
        });
    };

    setCounterValue = () => {
        this.props.fixMaxValue(this.state.maxValue);
        this.props.fixStartValue(this.state.startValue);
    };

    render = () => {
        return (
            <div className={this.props.setCounterToggle ? 'showSet' : 'hideSet'}>
                <div>
                    <label htmlFor="">max value</label>
                    <input
                        className={this.props.isMaxInputValid ? '' : 'max'}
                        type="number"
                        defaultValue={this.props.maxValue}
                        onChange={this.onMaxValueChange}
                    />
                </div>
                <div>
                    <label htmlFor="">start value</label>
                    <input
                        className={this.props.isMinInputValid ? '' : 'max'}
                        type="number"
                        defaultValue={this.props.startValue}
                        onChange={this.onStartValueChange}
                    />
                </div>
                <Button
                    disable={this.props.isDisabled}
                    title={'Set'}
                    btnStyle={'btn'}
                    handler={this.setCounterValue}
                />
            </div>
        );
    };
}

export default SetCounter;