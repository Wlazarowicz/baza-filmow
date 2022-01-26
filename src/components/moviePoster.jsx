import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class MoviePoster extends Component {

    render() {
        return <img className="moviePoster" src={this.props.image} alt="image"/>

    }
}

export default MoviePoster;
