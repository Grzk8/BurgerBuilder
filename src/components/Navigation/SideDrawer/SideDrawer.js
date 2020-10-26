import React from 'react';

import Backdrop from '../../Layout/Backdrop/Backdrop';

import Logo from '../../Burger/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']
    }

    return(
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height='11%'/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>

    );
};

export default sideDrawer;