import React from 'react';

const button = (props) => (
<button 
onClick={props.clicked}
disabled={props.disabled}
className={[props.btnType, 'Button'].join(' ')} >{props.children}</button>
);

export default button;