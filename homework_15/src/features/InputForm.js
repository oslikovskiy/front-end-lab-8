import React from 'react';

const InputForm = function(props) {
    return(
        <div className="input-form">
            <input type="text" onChange={props.onChange} placeholder="Color's name, tags" className="search-input"/>
        </div>
    )
};

export default InputForm;