import React from "react";
import Button from "./Button";

class SetCounter extends React.Component {
    state = {
        maxValue: this.props.maxValue,
        startValue: this.props.startValue
    };

    onMaxValueChange = (event) => {
        let maxValue = Number(event.currentTarget.value);
        this.setState({maxValue});
    };

    onStartValueChange = (event) => {
        let startValue = +event.currentTarget.value;

        if (startValue < 0) {
            this.props.setError('incorrect value!');
            // this.props.fixStartValue('incorrect value!');
        } else {
            this.props.fixStartValue('click on set btn');
        }

        this.setState({startValue});
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
                        type="number"
                        defaultValue={this.props.maxValue}
                        onChange={this.onMaxValueChange}
                    />
                </div>
                <div>
                    <label htmlFor="">start value</label>
                    <input
                        type="number"
                        defaultValue={this.props.startValue}
                        onChange={this.onStartValueChange}
                    />
                </div>
                <Button
                    title={'Set'}
                    btnStyle={'btn'}
                    handler={this.setValue}
                />
            </div>
        );
    };
}

export default SetCounter;