import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

class addMovieComponent extends Component {

    state = {
        movie: {
            title: "", image: "", description: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
        this.props.history.push('/');
        window.location.reload();
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
        if (movie.image.trim() === '') {
            errors.description = 'Musisz dodać link do plakatu filmu!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        console.log(this.state)

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: this.state.movie.title,
                content: this.state.movie.description,
                image: this.state.movie.image
            }
        }).then((response) => {
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.description = 'Nie udało się dodać filmu';
            this.setState({errors: errors || {}});
            console.log(error);
        });
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
                <br/>

                <div className="form-group">
                    <label htmlFor="title">Plakatu filmu (w wymiarach 9:16)</label>
                    <input value={this.state.movie.image}
                           name="image"
                           onChange={this.handleChange}
                           type="text"
                           className="form-control"
                           id="image"
                           aria-describedby="emailHelp"
                           placeholder="https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg"/>
                    {this.state.errors.image &&
                        <div className="alert alert-danger">{this.state.errors.image}</div>}

                </div>
                <br/>

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
                <br/>
                <button type="submit" className="btn btn-primary">Dodaj film</button>
            </form>
        </div>
    }
}

export default addMovieComponent;
