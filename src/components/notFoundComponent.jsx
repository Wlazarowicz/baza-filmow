import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class notFoundComponent extends Component {

    render() {
        return <div className="notFound">
                    <h1>404 - Nie znaleziono Strony</h1>
                    <a>Strona której szukasz prawdopodobnie nie istnieje</a>
                    </div>
    }
}

export default notFoundComponent;
