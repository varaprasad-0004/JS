import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1>Doc {props.name} {props.no}</h1>
        </div>
    );
}

export default Person;
