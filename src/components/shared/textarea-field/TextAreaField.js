import React from 'react'

const TextAreaField = props => (
    <textarea
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChangeHandler}
    ></textarea>
);


export default TextAreaField
