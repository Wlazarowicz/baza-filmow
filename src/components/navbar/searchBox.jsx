import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class SearchBox extends Component {

    render() {
        return <div className="searchBox">
            <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Wpisz Tytuł filmu"/>
                <button type="button" className="btn searchButton">Szukaj</button>
            </div>
        </div>

    }
}

export default SearchBox;