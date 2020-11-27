import { checkPropTypes } from 'prop-types';
import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        < NavigationItem link='/BurgerBuilder' exact={checkPropTypes.exact} >Burger Builder</ NavigationItem>
        {props.isAuthenticated ? < NavigationItem link='/orders'>Orders</ NavigationItem> : null}
        { !props.isAuthenticated 
        ?< NavigationItem link='/auth'>Login</ NavigationItem> 
        : < NavigationItem link='/logout'>Logout</ NavigationItem>}
    </ul>
);

export default navigationItems;