import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MoviePoster from './moviePoster'
import MovieContainer from "./movieContainer";
import {Link} from "react-router-dom";
class MovieCard extends Component{

    render() {
        return <Link to className="movieCard"
                  onClick={() => {
                      window.location.href = "/details";
                  }}>
            <MoviePoster/>
            <MovieContainer/>
            </Link>


    }
}
export default MovieCard;