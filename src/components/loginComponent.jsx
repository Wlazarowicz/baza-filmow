import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class loginComponent extends Component {

    state = {
        account: {
            username: "", password: ""
        },
        errors: {}
    };

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Login jest wymagany!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Hasło jest wymagane!';
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
        return <div className="loginComponent">
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="username">Login Użytkownika</label>
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
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
    }
}

export default loginComponent;
