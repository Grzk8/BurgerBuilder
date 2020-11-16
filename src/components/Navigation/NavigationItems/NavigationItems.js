import { checkPropTypes } from 'prop-types';
import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className='NavigationItems'>
        < NavigationItem link='/BurgerBuilder' exact={checkPropTypes.exact} >Burger Builder</ NavigationItem>
        < NavigationItem link='/orders'>Orders</ NavigationItem>
    </ul>
);

export default navigationItems;