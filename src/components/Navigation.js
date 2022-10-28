import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className={'navbar'}>
            <NavLink className={'navbar_option'} to="/">Home</NavLink>
            <NavLink className={'navbar_option'} to="/about">About</NavLink>
            <NavLink className={'navbar_option'} to="/contact">Contact</NavLink>
        </div>
    );
}

export default Navigation;