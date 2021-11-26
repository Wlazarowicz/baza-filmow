import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import Search from "../search";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Website logo</h1>
                </NavLink>
                <Bars/>
                <Search/>
                <NavBtn>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;