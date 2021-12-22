import React, { Component } from 'react';
import {BrowserRouter, Link} from "react-router-dom";
    class AddMovie extends Component{
    state = {};

    render() {
        return <BrowserRouter>
            <Link to
                  onClick={() => {
                      window.location.href = "/add";
                  }}>
                <button type="button" className="btn addMovieButton">Dodaj Film</button>
            </Link>
        </BrowserRouter>
    }
}
export default AddMovie;