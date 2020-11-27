import React from 'react';

import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added= {()=>props.ingrinientAdded(ctrl.type)}
            removed= {()=>props.ingredientRemoved(ctrl.type)}
            disabled = {props.disabled[ctrl.type]} />
        ))}
        <button 
        className='OrderButton'
        disabled={!props.purchasable}
        onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'LOGIN TO ORDER'}</button>
    </div>

);

export default buildControls;