import React from "react";

const InputField = props => (
    <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChangeHandler}
    />
);

export default InputField;
