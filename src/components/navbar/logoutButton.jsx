import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";

function logoutButtton() {

    return (
        <BrowserRouter>
            <Link to="#"
                  className="btn loginButton"
                  onClick={() => {
                      localStorage.removeItem('token')
                      window.location.href = "/";
                  }}>
                Wyloguj
            </Link>
        </BrowserRouter>

    );
}

export default logoutButtton;
