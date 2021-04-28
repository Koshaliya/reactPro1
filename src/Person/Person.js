import React from 'react';

const person = (props) => {
    return (
    <div>
        <p>I am {props.name} and im {props.age} old</p>
    <p>{props.children}</p>
    </div>    
    
    )
};

export default person;