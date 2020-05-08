import React from "react";

class Number extends React.Component{
    render = () => {
        let max = (this.props.countNum === this.props.maxValue) || (this.props.countNum < 0) ? 'max' : '';

        return (
            <div
                className={max}
            >{this.props.messageError || this.props.countNum}</div>
        );
    };
}

export default Number;