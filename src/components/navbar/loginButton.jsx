import React, {Component} from 'react';
import {BrowserRouter, Link} from "react-router-dom";

class Login extends Component {
    state = {};

    render() {
        return <BrowserRouter>
            <Link to="#"
                  onClick={() => {
                      window.location.href = "/signin";
                  }}>
                <button type="button" className="btn loginButton">Login</button>
            </Link>
        </BrowserRouter>
    }
}

export default Login;
