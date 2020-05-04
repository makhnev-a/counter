import React from "react";

class Number extends React.Component{
    render = () => {
        let max = this.props.countNum === this.props.maxValue ? 'max' : '';

        return (
            <div
                className={max}
            >Счетчик = {this.props.countNum}</div>
        );
    };
}

export default Number;