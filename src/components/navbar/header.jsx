import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo'
import SearchBox from './searchBox'
import Register from './registerButton'
import Login from './loginButton'
import AddMovie from "./addMovieButton";
import {isExpired, decodeToken} from "react-jwt";
import LogoutButton from "./logoutButton";

const Header = (props) => {

    const user = decodeToken(localStorage.getItem('token'));
    const isNotLogged = isExpired(localStorage.getItem('token'));

    return (<div className="header">
        <Logo/>
        <SearchBox/>
        {isNotLogged && <Login/>}
        {isNotLogged && <Register/>}
        {!isNotLogged && <LogoutButton/>}
        {!isNotLogged && <AddMovie/>}
    </div>)
}
export default Header;
