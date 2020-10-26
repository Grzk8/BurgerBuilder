import React from 'react';

import Logo from '../../Burger/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = props => (
    <header className='Toolbar'>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        < Logo height='80%'/>
        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;