import React from "react";
import Button from "./Button";

class SetCounter extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props);
    }
    state = {
        maxValue: this.props.maxValue,
        startValue: this.props.startValue,
        isMaxInputValid: true,
        isMinInputValid: true
    };

    checkValid = () => {
        if (this.props.maxValue === this.props.startValue) {
            this.props.setError('incorrect value!');

            this.setState({
                isMaxInputValid: false,
                isMinInputValid: false
            });

            this.props.setDisabled(true);
        } else if (this.props.maxValue < this.props.startValue) {
            this.props.setError('incorrect value!');

            this.setState({
                isMaxInputValid: false,
                isMinInputValid: true
            });

            this.props.setDisabled(true);
        } else if (this.props.startValue < 0) {
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
            this.checkValid(this.props.startValue, maxValue);
        });
    };

    onStartValueChange = (event) => {
        let startValue = +event.currentTarget.value;
        this.setState({startValue}, () => {
            this.checkValid(startValue, this.props.maxValue);
        });
    };

    setValue = () => {
        this.props.fixMaxValue(this.state.maxValue);
        this.props.fixStartValue(this.state.startValue);
        // this.props.saveState();
    };

    render = () => {
        return (
            <div className={this.props.setCounterToggle ? 'showSet' : 'hideSet'}>
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