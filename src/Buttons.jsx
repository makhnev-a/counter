import React from "react";

class Buttons extends React.Component{
    disableReset = () => {
        if (this.props.countNum < 1) {
            return true;
        }

        return false;
    };

    disableInc = () => {
        if (this.props.countNum === 5) {
            return true;
        }

        return false;
    };

    addNum = () => {
        let newNum = this.props.countNum + 1;

        if (newNum === 6) {
            return;
        }

        this.props.onAddNum(newNum);
    };

    clearNum = () => {
        this.props.onClearNum();
    };

    render = () => {
        let classInc = this.props.countNum === 5 ? 'btnDisable' : 'btn';
        let classRes = this.props.countNum < 1 ? 'btnDisable' : 'btn';

        return (
            <div>
                <button
                    disabled={this.disableInc()}
                    className={classInc}
                    onClick={this.addNum}
                >Inc</button>
                <button
                    disabled={this.disableReset()}
                    className={classRes}
                    onClick={this.clearNum}
                >Reset</button>
            </div>
        );
    };
}

export default Buttons;