import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from "./components/NavBar/navbar";
import Home from "./components/home";
import {Col, Container, Image, Row} from "react-bootstrap";

const movieTitleStyle = {color: 'white', fontSize: 17};
const footer = {color: 'white', textAlign: 'center', fontSize: 17}

function App() {
    return (

        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact component={Home}/>
                </Routes>
            </Router>
            <header>
                <h1>Movie Database</h1>
            </header>
            <Container>
                <Row>
                    <Col xs={3} md={55}>
                        <p style={movieTitleStyle}>Movie Title</p>
                        <img src={require("./images/Spider-Man-No-Way-Home-Poster-2.webp").default} width="100"
                             height="auto"/>
                    </Col>
                    <Col xs={3} md={55}>
                        <p style={movieTitleStyle}>Movie Title</p>
                        <img src={require("./images/Spider-Man-No-Way-Home-Poster-2.webp").default} width="100"
                             height="auto"/>
                    </Col>
                    <Col xs={3} md={55}>
                        <p style={movieTitleStyle}>Movie Title</p>
                        <img src={require("./images/Spider-Man-No-Way-Home-Poster-2.webp").default} width="100"
                             height="auto"/>
                    </Col>
                </Row>
            </Container>
            <p/>
            <Container>
                <Row>
                    <Col xs={3} md={55}>
                        <p style={movieTitleStyle}>Movie Title</p>
                        <img src={require("./images/Spider-Man-No-Way-Home-Poster-2.webp").default} width="100"
                             height="auto" alt=""/>
                    </Col>
                    <Col xs={3} md={55}>
                        <p style={movieTitleStyle}>Movie Title</p>
                        <img src={require("./images/Spider-Man-No-Way-Home-Poster-2.webp").default} width="100"
                             height="auto"/>
                    </Col>
                    <Col xs={3} md={55}>
                        <p style={movieTitleStyle}>Movie Title</p>
                        <img src={require("./images/Spider-Man-No-Way-Home-Poster-2.webp").default} width="100"
                             height="auto"/>
                    </Col>
                </Row>
            </Container>
            <p style={footer}>Stopka</p>
        </div>


    );
}

export default App;
