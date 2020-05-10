import React from "react";

class Button extends React.Component {
    clickHandler = () => {
        this.props.handler();
    };

    render = () => {
        let classNames = 'btn';

        if (this.props.disable) {
            classNames += ' btnDisable';
        }

        return (
            <button
                className={classNames}
                disabled={this.props.disable}
                onClick={this.clickHandler}
            >{this.props.title}</button>
        );
    };
}

export default Button;