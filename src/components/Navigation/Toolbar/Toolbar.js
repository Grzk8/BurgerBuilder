import React from 'react';

import Logo from '../../Burger/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'


const toolbar = props => (
    <header className='Toolbar'>
        <div>MENU</div>
        < Logo height='80%'/>
        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;