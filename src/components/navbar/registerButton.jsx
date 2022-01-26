import React, {Component} from 'react';
import {BrowserRouter, Link} from "react-router-dom";

class Register extends Component {
    state = {};

    render() {
        return <BrowserRouter>
            <Link to="#"
                  onClick={() => {
                      window.location.href = "/signup";
                  }}>
                <button type="button" className="btn loginButton">Rejestracja</button>
            </Link>
        </BrowserRouter>
    }
}

export default Register;
