import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class noAccessComponent extends Component {

    render() {
        return <div className="noAccess">
            <h1>Brak Dostępu</h1>
            <h5>Zaloguj się aby mieć dostęp do tej zawartości</h5>
        </div>
    }
}

export default noAccessComponent;
