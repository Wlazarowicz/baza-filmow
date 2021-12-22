import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class MovieContainer extends Component {

    render() {
        return <div className="movieContainer">
            <div className="movieTitle">Spider-Man: Bez drogi do domu</div>
            <br/>
            <div className="movieDescription"> Kiedy cały świat dowiaduje się, że pod maską Spider Mana skrywa się Peter
                Parker, superbohater decyduje się zwrócić o pomoc do Doktora Strange'a.
            </div>
        </div>

    }
}

export default MovieContainer;