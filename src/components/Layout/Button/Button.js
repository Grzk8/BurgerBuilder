import React from 'react';

const button = (props) => (
<button 
onClick={props.clicked}
className={[props.btnType, 'Button'].join(' ')} >{props.children}</button>
);

export default button;