import React from "react";
import Button from "./Button";

class SetCounter extends React.Component {
    state = {
        maxValue: this.props.maxValue,
        startValue: this.props.startValue
    };

    setValue = () => {

    };

    render = () => {
        return (
            <div>
                <div>
                    <label htmlFor="">max value</label>
                    <input type="number" defaultValue={this.props.maxValue}/>
                </div>
                <div>
                    <label htmlFor="">start value</label>
                    <input type="number" defaultValue={this.props.startValue}/>
                </div>
                <Button
                    title={'Set'}
                    btnStyle={'btn'}
                    handler={this.setValue}
                />
            </div>
        );
    };
};

export default SetCounter;