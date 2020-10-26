import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className='NavigationItems'>
        < NavigationItem link='/' >Burger Builder</ NavigationItem>
        < NavigationItem link='/'>Checkout</ NavigationItem>
    </ul>
);

export default navigationItems;