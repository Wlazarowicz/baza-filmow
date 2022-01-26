import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class notFoundComponent extends Component {

    render() {
        return <div className="notFound">
            <h1>404 - Nie znaleziono Strony</h1>
            <h5>Strona której szukasz prawdopodobnie nie istnieje</h5>
        </div>
    }
}

export default notFoundComponent;
