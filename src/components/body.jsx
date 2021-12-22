import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import MovieCard from "./movieCard";
class Body extends Component{

    render() {
        return <div className="body">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>

    }
}
export default Body;