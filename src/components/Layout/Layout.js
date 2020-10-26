import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import sideDrawer from '../Navigation/SideDrawer/SideDrawer';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
return (
    <div>
        <Toolbar />
        <SideDrawer />
        <main className='content'>
            {props.children}
        </main>
    </div>
)};

export default layout;