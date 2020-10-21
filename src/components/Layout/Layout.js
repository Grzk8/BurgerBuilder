import React from 'react';

const layout = (props) => {
return (
    <div>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className='content'>
            {props.children}
        </main>
    </div>
)};

export default layout;