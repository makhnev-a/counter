import React from "react";
import Number from "./Number";
import Button from "./Button";

const Counter = (props) => {
    const checkValueInc = () => (props.countNum === props.maxValue) || (props.countNum < 0);
    const checkValueRes = () => props.countNum < props.minValue + 1;
    const setBtnClick = () => props.changeSetToggle();

    return (
        <div>
            <Number
                countNum={props.countNum}
                maxValue={props.maxValue}
                messageError={props.messageError}
            />
            <Button
                title={'Inc'}
                disable={checkValueInc() ? true : props.isDisabled}
                handler={props.onAddNum}
            />
            <Button
                title={'Reset'}
                disable={checkValueRes() ? true : props.isDisabled}
                handler={props.onClearNum}
            />
            <Button
                title={'Set'}
                handler={setBtnClick}
            />
        </div>
    );
}

export default Counter;