import React from "react";
import Number from "./Number";
import Button from "./Button";

class Counter extends React.Component{
    classInc = () => {
        return this.props.countNum === this.props.maxValue ? 'btnDisable' : 'btn';
    };

    classRes = () => {
        return this.props.countNum < 1 ? 'btnDisable' : 'btn';
    };

    render = () => {
        return (
            <div>
                <Number
                    countNum={this.props.countNum}
                    maxValue={this.props.maxValue}
                />
                <Button
                    title={'Inc'}
                    disable={this.props.countNum === this.props.maxValue}
                    handler={this.props.onAddNum}
                    btnStyle={this.classInc()}
                />
                <Button
                    title={'Reset'}
                    disable={this.props.countNum < 1}
                    handler={this.props.onClearNum}
                    btnStyle={this.classRes()}
                />
            </div>
        );
    };
}

export default Counter;