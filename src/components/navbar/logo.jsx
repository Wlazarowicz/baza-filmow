import React, {Component} from 'react';
import logo from '../../logo.svg';
import {BrowserRouter, Link} from "react-router-dom";

class Logo extends Component {
    state = {};

    render() {
        return <BrowserRouter>
            <Link to="#"
                  onClick={() => {
                      window.location.href = "/";
                  }}>
                <img src={logo} className="logo" alt="logo"/>
            </Link>
        </BrowserRouter>
    }
}

export default Logo;
