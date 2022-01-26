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
            moviesFromAPI: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://pr-movies.herokuapp.com/api/movies")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    moviesFromAPI: json,
                    isLoaded: true,
                });
            });
    }

    render() {
        const {isLoaded, moviesFromAPI} = this.state;
        for (let i = 0; i < moviesFromAPI.length; i++) {
            if (moviesFromAPI[i].title === undefined || moviesFromAPI[i].title.length < 2) {
                moviesFromAPI.splice(i, 1)
                i--;
            }
            if (moviesFromAPI[i].content === undefined || moviesFromAPI[i].content.length < 2) {
                moviesFromAPI.splice(i, 1)
                i--;
            }
            if (moviesFromAPI[i].image === undefined || moviesFromAPI[i].image.length < 2 || !moviesFromAPI[i].image.includes("https://")) {
                moviesFromAPI.splice(i, 1)
                i--;
            }
        }
        
        return (<div className="body">
                {isLoaded && <Row>
                        <div className="bodyContainer">
                            {moviesFromAPI.map((movie) => (
                                <Col xs={6} md={12}>
                                    <MovieCard title={movie.title} content={movie.content} image={movie.image}
                                               id={movie.id}/>
                                </Col>
                            ))}
                        </div>
                </Row>}
            </div>
        )

    }
}

export default Body;
