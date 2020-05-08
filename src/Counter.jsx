import React from "react";
import Number from "./Number";
import Button from "./Button";

class Counter extends React.Component{
    checkValueInc = () => (this.props.countNum === this.props.maxValue) || (this.props.countNum < 0);
    checkValueRes = () => this.props.countNum < this.props.minValue + 1;

    classInc = () => this.checkValueInc() ? 'btnDisable' : 'btn';
    classRes = () => this.checkValueRes() ? 'btnDisable' : 'btn';

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
                    disable={this.checkValueInc()}
                    handler={this.props.onAddNum}
                    btnStyle={this.classInc()}
                />
                <Button
                    title={'Reset'}
                    disable={this.props.countNum < this.props.minValue + 1}
                    handler={this.props.onClearNum}
                    btnStyle={this.classRes()}
                />
            </div>
        );
    };
}

export default Counter;