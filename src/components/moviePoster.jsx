import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from '../images/Spider_Man_No_Way_Home.webp'

class MoviePoster extends Component {

    render() {
        return <img src={Banner} className="moviePoster"/>

    }
}

export default MoviePoster;