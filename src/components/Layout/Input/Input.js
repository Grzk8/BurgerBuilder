import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ( 'input'):
            inputElement = <input 
                className='InputElement' 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ( 'trxtarea'):
            inputElement = <textarea 
                className='InputElement' 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ( 'select'):
             inputElement = 
                <select 
                    className='InputElement' 
                    value={props.value} 
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>;
            break;    
        default:
            inputElement = <input 
                className='InputElement' 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>
    }

    return (
        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;