import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import MoviePoster from "./moviePoster";
import MovieContainer from "./movieContainer";

class movieDetailsComponent extends Component {

    render() {
        return <div className="movieDetails">
            <MoviePoster/>
            <MovieContainer/>
            </div>
    }
}

export default movieDetailsComponent;
