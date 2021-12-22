import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class addMovieComponent extends Component {

    state = {
        movie: {
            title: "", description: ""
        },
        errors: {}
    };

    validate = () => {
        const errors = {};

        const {movie} = this.state;
        if (movie.title.trim() === '') {
            errors.title = 'Musisz podać tytuł!';
        }
        if (movie.description.trim() === '') {
            errors.description = 'Musisz podać krótki opis fabuły!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        console.log("submit - np. zapytanie do serwera");
    };

    handleChange = (event) => {
        const movie = {...this.state.movie};
        movie[event.currentTarget.name] = event.currentTarget.value;
        this.setState({movie});
    };

    render() {
        return <div className="loginComponent">
                <form onSubmit={this.handleSubmit}>
                    <h1>Dodaj Film</h1>
                    <div className="form-group">
                        <label htmlFor="title">Tytuł Filmu</label>
                        <input value={this.state.movie.title}
                               name="title"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="title"
                               aria-describedby="emailHelp"
                               placeholder="Spider-Man 2021"/>
                        {this.state.errors.title &&
                        <div className="alert alert-danger">{this.state.errors.title}</div>}

                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="text">Opis Fabuły</label>
                        <textarea value={this.state.movie.description}
                               name="description"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="description"
                               aria-describedby="emailHelp"
                                  rows="8" cols="50"

                               placeholder="Młody człowiek zostaje ugryziony przez zmutowanego pająka..."/>
                        {this.state.errors.description &&
                        <div className="alert alert-danger">{this.state.errors.description}</div>}

                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Dodaj film do akceptacji</button>
                </form>
            </div>
    }
}

export default addMovieComponent;
