import React from "react";
import Button from "./Button";

class SetCounter extends React.Component {
    state = {
        maxValue: this.props.maxValue,
        startValue: this.props.startValue
    };

    onMaxValueChange = (event) => {
        this.setState({
            maxValue: Number(event.currentTarget.value)
        });
    };

    onStartValueChange = (event) => {
        this.setState({
            startValue: +event.currentTarget.value
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