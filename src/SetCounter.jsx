import React from "react";
import Button from "./Button";

class SetCounter extends React.Component {
    state = {
        maxValue: this.props.maxValue,
        startValue: this.props.startValue,
        isMaxInputValid: true,
        isMinInputValid: true
    };

    checkValid = () => {
        console.log(this.state.startValue, this.state.maxValue)
        if (this.state.maxValue === this.state.startValue) {
            this.props.setError('incorrect value!');

            this.setState({
                isMaxInputValid: false,
                isMinInputValid: false
            });

            this.props.setDisabled(true);
        } else if (this.state.maxValue < this.state.startValue) {
            this.props.setError('incorrect value!');

            this.setState({
                isMaxInputValid: false,
                isMinInputValid: true
            });

            this.props.setDisabled(true);
        } else if (this.state.startValue < 0) {
            this.props.setError('incorrect value!');
            this.setState({
                isMinInputValid: false
            });
            this.props.setDisabled(true);
        } else {
            this.setState({
                isMinInputValid: true,
                isMaxInputValid: true,
            });
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

    setValue = () => {
        this.props.fixMaxValue(this.state.maxValue);
        this.props.fixStartValue(this.state.startValue);
    };

    render = () => {
        return (
            <div>
                <div>
                    <label htmlFor="">max value</label>
                    <input
                        className={this.state.isMaxInputValid ? '' : 'max'}
                        type="number"
                        defaultValue={this.props.maxValue}
                        onChange={this.onMaxValueChange}
                    />
                </div>
                <div>
                    <label htmlFor="">start value</label>
                    <input
                        className={this.state.isMinInputValid ? '' : 'max'}
                        type="number"
                        defaultValue={this.props.startValue}
                        onChange={this.onStartValueChange}
                    />
                </div>
                <Button
                    disable={this.props.isDisabled}
                    title={'Set'}
                    btnStyle={'btn'}
                    handler={this.setValue}
                />
            </div>
        );
    };
}

export default SetCounter;