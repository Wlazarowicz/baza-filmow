import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MoviePoster from './moviePoster'
import MovieContainer from "./movieContainer";
import {Link} from "react-router-dom";

class movieCard extends Component {

    render() {
        const url = "details/" + this.props.id;
        return (<Link to className="movieCard"
                      onClick={() => {
                          window.location.href = url;
                      }}>
            <MoviePoster image={this.props.image}/>
            <MovieContainer title={this.props.title} content={this.props.content}/>
        </Link>);
    }
}

export default movieCard;
