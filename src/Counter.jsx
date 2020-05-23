import React from "react";
import Number from "./Number";
import Button from "./Button";

class Counter extends React.Component{
    checkValueInc = () => (this.props.countNum === this.props.maxValue) || (this.props.countNum < 0);
    checkValueRes = () => this.props.countNum < this.props.minValue + 1;

    render = () => {
        return (
            <div>
                <Number
                    countNum={this.props.countNum}
                    maxValue={this.props.maxValue}
                    messageError={this.props.messageError}
                />
                <Button
                    title={'Inc'}
                    disable={this.checkValueInc() ? true : this.props.isDisabled}
                    handler={this.props.onAddNum}
                />
                <Button
                    title={'Reset'}
                    disable={this.checkValueRes() ? true : this.props.isDisabled}
                    handler={this.props.onClearNum}
                />
            </div>
        );
    };
}

export default Counter;