import React from 'react';

const navigationItem = (props) => (
    <li className='NavigationItem'>
        <a 
        href={props.link}
        >{props.children}</a></li>
);

export default navigationItem;