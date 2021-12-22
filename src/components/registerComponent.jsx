import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class registerComponent extends Component {

    state = {
        account: {
            email: "", login: "", username: "", password: ""
        },
        errors: {}
    };

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if (account.login.trim() === '') {
            errors.login = 'Login jest wymagany!';
        }
        if (account.username.trim() === '') {
            errors.username = 'Nazwa jest wymagana!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Hasło jest wymagane!';
        }
        if (account.email.trim() === '') {
            errors.email = 'Email jest wymagany!';
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
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };

    render() {
        return <div className="registerComponent">
            <form onSubmit={this.handleSubmit}>
                <h1>Rejestracja</h1>
                <div className="form-group">
                    <label htmlFor="email">Adres Email</label>
                    <input value={this.state.account.email}
                           name="email"
                           onChange={this.handleChange}
                           type="text"
                           className="form-control"
                           id="email"
                           aria-describedby="emailHelp"
                           placeholder="Tomek123@email.com"/>
                    {this.state.errors.email &&
                    <div className="alert alert-danger">{this.state.errors.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="username">Login Użytkownika</label>
                    <input value={this.state.account.login}
                           name="login"
                           onChange={this.handleChange}
                           type="text"
                           className="form-control"
                           id="login"
                           aria-describedby="emailHelp"
                           placeholder="tomek123"/>
                    {this.state.errors.login &&
                    <div className="alert alert-danger">{this.state.errors.login}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="username">Nazwa Użytkownika</label>
                    <input value={this.state.account.username}
                           name="username"
                           onChange={this.handleChange}
                           type="text"
                           className="form-control"
                           id="username"
                           aria-describedby="emailHelp"
                           placeholder="Tomek123"/>
                    {this.state.errors.username &&
                    <div className="alert alert-danger">{this.state.errors.username}</div>}
                </div>


                <br></br>
                <div className="form-group">
                    <label htmlFor="password">Hasło</label>
                    <input value={this.state.account.password}
                           name="password"
                           onChange={this.handleChange}
                           type="password"
                           className="form-control"
                           id="password"
                           placeholder="*****"/>
                    {this.state.errors.password &&
                    <div className="alert alert-danger">{this.state.errors.password}</div>}

                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Zarejestruj</button>
            </form>
        </div>
    }
}

export default registerComponent;
