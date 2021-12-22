import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo'
import SearchBox from './searchBox'
import Register from './registerButton'
import Login from './loginButton'
import AddMovie from "./addMovieButton";
class Header extends Component{

    render() {
        return <div className="header">
            <Logo></Logo>
            <SearchBox></SearchBox>
            <AddMovie></AddMovie>
            <Register></Register>
            <Login></Login>
        </div>

    }
}
export default Header;