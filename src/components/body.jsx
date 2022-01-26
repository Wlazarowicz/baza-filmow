import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col} from "react-bootstrap";
import MovieCard from "./movieCard";
import {isExpired} from "react-jwt";

class Body extends Component {
    constructor(props) {
        super(props);
        this.isNotLogged = isExpired(localStorage.getItem('token'));
        this.state = {
            movieList: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://pr-movies.herokuapp.com/api/movies")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    movieList: json,
                    isLoaded: true,
                });
            });
    }

    render() {
        const {isLoaded, movieList} = this.state;
        return (<div className="body">
                {isLoaded && <Row>
                    <React.Fragment>
                        <div className="bodyContainer">
                            {movieList.map((movie) => (
                                <Col xs={6} md={12}>
                                    <MovieCard title={movie.title} content={movie.content} image={movie.image}
                                               id={movie.id}/>
                                </Col>
                            ))}
                        </div>
                    </React.Fragment>
                </Row>}
            </div>
        )

    }
}

export default Body;
