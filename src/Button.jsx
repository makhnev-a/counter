import React from "react";

class Button extends React.Component{
    clickHandler = () => {
        this.props.handler();
    };

    render = () => {
        console.log(this.props.disable);
      return (
          <button
              className={this.props.btnStyle}
              disabled={this.props.disable}
              onClick={this.clickHandler}
          >{this.props.title}</button>
      );
    };
}

export default Button;